/**
 * Utility function to scroll to the top of the page instantly
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
};

/**
 * Utility function to scroll to the top smoothly
 */
export const scrollToTopSmooth = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
