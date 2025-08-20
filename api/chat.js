// /api/chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    res.setHeader("Cache-Control", "no-store");

    // 🔒 robust body parsing
    let body = req.body;
    if (!body || typeof body === "string") {
      try {
        body = JSON.parse(body || "{}");
      } catch {
        body = {};
      }
    }

    const { message, context, system, temperature = 0.7 } = body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Missing 'message' string in body" });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: "Server misconfig: GEMINI_API_KEY not set" });
    }

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{
            text:
`You are Adsonic Digital Agency's website assistant.
Keep answers concise, use short paragraphs + bullet points, bold key labels when helpful.
${system ? `\nSystem:\n${system}\n` : ""}
${context ? `\nCompany data:\n${context}\n` : ""}

User question: ${message}`
          }],
        },
      ],
      generationConfig: { temperature },
    };

    const rsp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": API_KEY,
        },
        body: JSON.stringify(payload),
      }
    );

    // 👇 surface upstream issues (e.g., 429 rate limit)
    if (!rsp.ok) {
      const errText = await rsp.text().catch(() => "");
      return res.status(rsp.status).json({
        error: "Gemini upstream error",
        status: rsp.status,
        detail: errText.slice(0, 1000),
      });
    }

    const data = await rsp.json();
    return res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
