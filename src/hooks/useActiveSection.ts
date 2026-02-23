// src/hooks/useActiveSection.ts
import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');
  
  const idsString = sectionIds.join(',');

  useEffect(() => {
    const currentSectionIds = idsString.split(',');
    let isThrottled = false;

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      setTimeout(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
          setActiveSection(currentSectionIds[currentSectionIds.length - 1]);
        }
        isThrottled = false;
      }, 100); 
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -50% 0px',
        threshold: [0, 0.1, 0.5]
      }
    );

    currentSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [idsString]);

  return activeSection;
}