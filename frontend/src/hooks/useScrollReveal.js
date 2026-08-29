import { useEffect, useRef } from "react";

/**
 * Custom hook to add scroll reveal animations to elements.
 * Adds a class to elements when they enter the viewport.
 *
 * Usage:
 * const { revealRef } = useScrollReveal();
 * <div ref={revealRef} className="reveal">...</div>
 */
const useScrollReveal = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    // Add initial classes
    element.classList.add("reveal-init");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return { revealRef };
};

export default useScrollReveal;