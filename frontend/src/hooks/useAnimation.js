import { useEffect } from "react";

/**
 * Global scroll animation initializer - adds reveal animations to any element
 * with `data-reveal` attribute. Simply add data-reveal="fade-up" etc. to elements.
 *
 * Supported values: fade-up, fade-down, fade-left, fade-right, zoom-in, flip-up
 */
const useAnimationReveal = () => {
  useEffect(() => {
    let observer;

    const initObserver = () => {
      if (observer) observer.disconnect();

      const revealElements = document.querySelectorAll("[data-reveal]");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      revealElements.forEach((el) => observer.observe(el));
    };

    // Initial setup
    initObserver();

    // Watch for dynamically added elements (async data loading)
    const mutationObserver = new MutationObserver(() => {
      initObserver();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

export default useAnimationReveal;