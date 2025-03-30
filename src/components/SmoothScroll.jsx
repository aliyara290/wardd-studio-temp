"use client";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef();
  const pathname = usePathname();

  // Reset scroll position when pathname changes
  useEffect(() => {
    if (lenisRef.current) {
      // Scroll to top on page change
      window.scrollTo(0, 0);
      
      // Reset the Lenis scroller - only if the instance has the method
      if (lenisRef.current.lenis && typeof lenisRef.current.lenis.scrollTo === 'function') {
        lenisRef.current.lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname]);

  return (
    <ReactLenis
      ref={lenisRef}
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