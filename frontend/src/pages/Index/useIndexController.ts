import { useEffect, useState } from 'react';

export function useIndexController() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (window.innerWidth > 768) {
      return true;
    }

    return false;
  });

  function handleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isSidebarOpen,
    handleSidebar,
  };
}
