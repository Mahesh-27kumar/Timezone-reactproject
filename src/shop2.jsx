// Import React and GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextAnimation = () => {
  // Create a ref to target the text element
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation when the component mounts
    gsap.fromTo(
      textRef.current, // Target element
      { opacity: 0, x: -100 }, // Initial state
      { opacity: 1, x: 0, duration: 2, ease: "power3.out" } // Final state and animation settings
    );
  }, []);

  return (
    <div>
      <h1 ref={textRef}>Hello, Welcome to GSAP Animation!</h1>
    </div>
  );
};

export default TextAnimation;
