"use client";
import { ReactLenis } from "lenis/react";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,  // Set a lower value for faster scrolling
        easing: (t) => 1 - Math.pow(1 - t, 4), // Make the easing sharper for quicker deceleration
        smoothWheel: true,  // Enable smooth scrolling for the wheel
        smoothTouch: true,  // Smooth scrolling for touch gestures (optional)
        lerp: 0.2,  // Linear interpolation for smoother transitions, smaller is faster
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;

