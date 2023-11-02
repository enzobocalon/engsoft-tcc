import { useRef, useEffect, MutableRefObject } from 'react';

const useClickOutside = <T extends HTMLElement>(
  cb: () => void
): MutableRefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb();
      }
    };
    document.addEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick, true);
  }, [cb]);

  return ref;
};

export { useClickOutside };
