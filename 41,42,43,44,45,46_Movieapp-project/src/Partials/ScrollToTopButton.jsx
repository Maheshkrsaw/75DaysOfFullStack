// path: 41,42,43,44_Movieapp-project/src/Partials/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri"; // react-icons arrow

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 cursor-pointer p-3 bg-[#6556CD] hover:bg-[#4b3fa0] text-white rounded-full shadow-lg transition-all duration-300"
        >
          <RiArrowUpLine size={28} />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
