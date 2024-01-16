import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('scrollToTop', handleScrollToTop);
    return () => {
      window.removeEventListener('scrollToTop', handleScrollToTop);
    };
  }, []);

  return () => window.dispatchEvent(new Event('scrollToTop'));
};

export default useScrollToTop;
