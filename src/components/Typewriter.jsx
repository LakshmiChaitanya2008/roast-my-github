import React, { useState, useEffect } from "react";

const Typewriter = ({ text, typingSpeed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, typingSpeed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
