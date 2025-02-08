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
      {/* Car body */}
      <path d="M5,11 L19,11 C20.1,11 21,11.9 21,13 L21,15 C21,16.1 20.1,17 19,17 L5,17 C3.9,17 3,16.1 3,15 L3,13 C3,11.9 3.9,11 5,11 Z" />
      {/* Windows */}
      <path d="M7,11 L10,8 L14,8 L17,11" fill="rgba(255,255,255,0.3)" />
      {/* Wheels */}
      <circle cx="7" cy="14" r="1.5" fill="rgba(0,0,0,0.2)" />
      <circle cx="17" cy="14" r="1.5" fill="rgba(0,0,0,0.2)" />
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