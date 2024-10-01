import { useEffect } from 'react';

const usePreventContextMenu = (): void => {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent): void => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextmenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);
};

export default usePreventContextMenu;
