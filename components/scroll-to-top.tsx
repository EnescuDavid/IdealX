'use client';

import { useState, useEffect } from 'react';

// Custom truck icon (top-down view)
function TruckIcon() {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-6 h-6"
    >
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
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
          <TruckIcon />
        </button>
      )}
    </>
  );
} 