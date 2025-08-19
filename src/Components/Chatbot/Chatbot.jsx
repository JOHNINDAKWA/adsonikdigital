import React, { useEffect, useRef, useState } from "react";
import { FiMessageSquare, FiRotateCcw } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import "./Chatbot.css";
import { adsonicData } from "./chatbotData";

/* ---------- Minimal Markdown → HTML (bold, lists, paragraphs, links) ---------- */
function formatMarkdown(text) {
  const esc = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const linkify = (s) =>
    s
      .replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1" class="msg-link">$1</a>'
      )
      .replace(
        /(https?:\/\/[^\s)]+)(?![^<]*>)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer" class="msg-link">$1</a>'
      );

  const lines = text.split(/\r?\n/);
  let html = "";
  let inUL = false,
    inOL = false;

  const closeLists = () => {
    if (inUL) {
      html += "</ul>";
      inUL = false;
    }
    if (inOL) {
      html += "</ol>";
      inOL = false;
    }
  };

  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) {
      closeLists();
      html += "<br/>";
      return;
    }

    const ol = line.match(/^(\d+)\.\s+(.+)/);
    if (ol) {
      if (inUL) {
        html += "</ul>";
        inUL = false;
      }
      if (!inOL) {
        html += "<ol class='msg-ol'>";
        inOL = true;
      }
      const piece = esc(ol[2]).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      html += `<li>${linkify(piece)}</li>`;
      return;
    }

    const ul = line.match(/^(-|•)\s+(.+)/);
    if (ul) {
      if (inOL) {
        html += "</ol>";
        inOL = false;
      }
      if (!inUL) {
        html += "<ul class='msg-ul'>";
        inUL = true;
      }
      const piece = esc(ul[2]).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      html += `<li>${linkify(piece)}</li>`;
      return;
    }

    const para = esc(line).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    closeLists();
    html += `<p>${linkify(para)}</p>`;
  });

  closeLists();
  return html;
}

/* ---------- Helpers / Constants ---------- */
const STORAGE_KEY = "adsonic_chat_messages_v1";
const OPEN_KEY = "adsonic_chat_isopen_v1";
const MAX_SAVED = 50;

const STARTER_SUGGESTIONS = [
  "What services do you offer?",
  "What is SEO and how do you do it?",
  "Share portfolio links",
  "How long will my project take?",
];

/** Extract FOLLOWUPS from the end of a model reply.
 * Format:  FOLLOWUPS: q1 || q2 || q3
 * Returns {cleanText, followUps[]} with at most TWO shortest, trimmed items.
 */
function extractFollowUps(text) {
  const re = /(?:^|\n)FOLLOWUPS:\s*(.+)\s*$/i;
  const m = text.match(re);
  if (!m) return { cleanText: text, followUps: [] };

  const raw = m[1] || "";
  const list = raw
    .split("||")
    .map((s) =>
      s
        .trim()
        .replace(/^[—–-•\s]+/, "") // remove leading bullets/dashes
        .replace(/\s+/g, " ")
    )
    .filter(Boolean);

  // pick TWO shortest items; cap length to keep chips compact
  const twoShortest = list
    .sort((a, b) => a.length - b.length)
    .filter((s) => s.length <= 55)
    .slice(0, 2);

  const cleanText = text.replace(re, "").trim();
  return { cleanText, followUps: twoShortest };
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋, I’m your AdsOniC assistant. How can I help today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [followUps, setFollowUps] = useState([]); // dynamic follow-up chips

  const endRef = useRef(null);
  const typerRef = useRef(null);
  const inputRef = useRef(null);

  /* ---------- Load from localStorage ---------- */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
      const savedOpen = localStorage.getItem(OPEN_KEY);
      if (savedOpen !== null) setIsOpen(savedOpen === "true");
    } catch(error) { console.error(error)}
    return () => {
      if (typerRef.current) clearInterval(typerRef.current);
    };
  }, []);

  /* ---------- Persist ---------- */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_SAVED)));
    } catch(error) { console.error(error)}
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem(OPEN_KEY, String(isOpen));
    } catch(error) { console.error(error)}
  }, [isOpen]);

  /* ---------- Auto-scroll ---------- */
  useEffect(() => {
    if (endRef.current)
      endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, isOpen, followUps]);

  const toggleChat = () => setIsOpen((v) => !v);

  const resetChat = () => {
    if (typerRef.current) clearInterval(typerRef.current);
    setMessages([{ role: "bot", text: "Chat reseted – How can I help today?" }]);
    setFollowUps([]);
    setInput("");
    setLoading(false);
  };

  /* ---------- Typewriter reveal ---------- */
  const typeOut = (finalText) => {
    let i = 0;
    const step = Math.max(1, Math.ceil(finalText.length / 120));
    if (typerRef.current) clearInterval(typerRef.current);
    typerRef.current = setInterval(() => {
      i = Math.min(finalText.length, i + step);
      setMessages((prev) => {
        const next = [...prev];
        const idx = next.length - 1;
        if (idx >= 0 && next[idx].role === "bot") {
          next[idx] = { ...next[idx], text: finalText.slice(0, i) };
        }
        return next;
      });
      if (i >= finalText.length) {
        clearInterval(typerRef.current);
        typerRef.current = null;
      }
    }, 12);
  };


  const handleInputChange = (e) => {
  setInput(e.target.value);
  if (inputRef.current) {
    inputRef.current.style.height = "auto";
    inputRef.current.style.height =
      Math.min(inputRef.current.scrollHeight, 120) + "px";
  }
}
  /* ---------- Send ---------- */
  const handleSend = async (presetText) => {
    const text = (presetText ?? input).trim();
    if (!text) return;

    const userMessage = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setFollowUps([]); // clear old follow-ups until we get new ones

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `You are Adsonic Digital Agency's website assistant.
Answer concisely, in short paragraphs and bullet points where useful. Bold key labels.
After your answer, provide up to **2 ultra-short** follow-up questions on ONE line in the exact format:
FOLLOWUPS: q1 || q2
(Keep each follow-up ≤ 6 words.)

Company data:
${adsonicData}

User question: ${text}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();
      const raw =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn’t get that.";

      const { cleanText, followUps: nextFU } = extractFollowUps(raw);

      // Add empty bot bubble then type it out
      setMessages((prev) => [...prev, { role: "bot", text: "" }]);
      setLoading(false);
      setTimeout(() => {
        typeOut(cleanText);
        setFollowUps(nextFU);
      }, 30);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Oops! Something went wrong." },
      ]);
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const hasUserSpoken = messages.some((m) => m.role === "user");

  return (
    <div className="chatbot-container">
      {/* Floating Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <FiMessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span className="chatbot-title">💬 AdsOniC Assistant</span>
            <div className="header-actions">
              <button
                className="chatbot-reset"
                title="Reset chat"
                onClick={resetChat}
                aria-label="Reset chat"
              >
                <FiRotateCcw size={16} />
              </button>
              <button
                className="chatbot-close"
                onClick={toggleChat}
                aria-label="Minimize chat"
                title="Minimize"
              >
                <IoChevronDown size={20} />
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${msg.role === "user" ? "user" : "bot"}`}
              >
                {msg.role === "bot" ? (
                  <div
                    className="msg-content"
                    dangerouslySetInnerHTML={{ __html: formatMarkdown(msg.text) }}
                  />
                ) : (
                  <div className="msg-content">{msg.text}</div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="chat-message bot">
                <span className="typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions:
              - show starter chips only before first user message
              - show (max 2) follow-up chips after each bot answer */}
          <div className="chatbot-suggestions">
            {!hasUserSpoken &&
              STARTER_SUGGESTIONS.map((s, idx) => (
                <button key={idx} onClick={() => handleSend(s)}>
                  {s}
                </button>
              ))}

            {hasUserSpoken &&
              followUps.map((s, idx) => (
                <button key={idx} onClick={() => handleSend(s)}>
                  {s}
                </button>
              ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <textarea
  ref={inputRef}
  rows={1}
  placeholder="Type your message… (Shift+Enter = newline)"
  value={input}
  onChange={handleInputChange}
  onKeyDown={handleKeyDown}
  disabled={loading}
/>

            <button onClick={() => handleSend()} disabled={loading}>
              {loading ? "…" : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
