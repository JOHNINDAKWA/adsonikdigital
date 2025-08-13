import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to the top on route change
    window.scrollTo({
      top: 0,
      behavior: 'instant', // This is the key change
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;