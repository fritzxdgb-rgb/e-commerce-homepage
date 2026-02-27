import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to track window scroll position.
 * @param {number} threshold - The scroll threshold in pixels.
 * @returns {boolean} - Whether the scroll position is beyond the threshold.
 */
export const useScroll = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isScrolled;
};
