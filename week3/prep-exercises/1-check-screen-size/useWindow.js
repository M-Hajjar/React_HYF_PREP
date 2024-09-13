import { useState, useEffect, useDebugValue } from 'react';

function useWindowSize() {
  // State to store the window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use useDebugValue to display custom debug info
  useDebugValue(`Width: ${windowSize.width}, Height: ${windowSize.height}`);

  return windowSize;
}

export default useWindowSize;
