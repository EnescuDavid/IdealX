'use client';

import { useState, useEffect } from 'react';

// Custom car icon (top-down view)
function CarIcon() {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-6 h-6"
    >
      <path d="M6,16 L18,16 C19.1,16 20,15.1 20,14 L20,12 L22,12 L18,8 L14,12 L16,12 L16,13 L8,13 L8,12 L10,12 L6,8 L2,12 L4,12 L4,14 C4,15.1 4.9,16 6,16 Z" />
    </svg>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled 50% of viewport height
      const scrolled = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      
      setIsVisible(scrolled > viewportHeight * 0.5);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
    // Reset the animation after scrolling is complete
    const scrollDuration = 500; // matches scroll duration
    setTimeout(() => {
      setIsScrolling(false);
    }, scrollDuration);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-40 p-3 
            bg-primary text-white rounded-full shadow-lg 
            hover:bg-primary/90 transition-all duration-300 
            animate-fade-in
            ${isScrolling ? 'animate-drive-to-top' : ''}
          `}
          aria-label="Scroll to top"
        >
          <CarIcon />
        </button>
      )}
    </>
  );
} 