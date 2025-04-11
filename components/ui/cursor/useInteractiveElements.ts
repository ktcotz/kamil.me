import { useEffect } from 'react';

export const useInteractiveElements = () => {
  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, [role=button], input, select, textarea',
    );
    interactiveElements.forEach((el) => {
      el.setAttribute('data-cursor-hover', 'true');
    });
  }, []);
};
