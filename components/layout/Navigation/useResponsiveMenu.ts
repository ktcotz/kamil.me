'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function useResponsiveMenu(breakpoint = 768) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);

    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname, breakpoint]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return { isOpen, toggleMenu, closeMenu };
}
