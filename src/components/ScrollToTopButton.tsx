import React, { useState, useEffect } from "react";
import s from "../stores/styling";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
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
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <s.Button onClick={scrollToTop} className="scroll-top-btn">
            <s.TopArrowIcon/>
        </s.Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
