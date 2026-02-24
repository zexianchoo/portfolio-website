import { vertNavLinks } from "@/features/navbar/NavLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
// Removed: import { Link } from '@tanstack/react-router';

export default function VerticalNav() {
  // Strip the '#' to pass just the IDs to your hook (e.g., 'about', 'experience')
  const sectionIds = vertNavLinks.map((link) => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault(); // Stop TanStack Router or the browser from reloading
    
    const targetId = hash.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // Align to the top of the viewport
      });

      // Update the URL hash silently so users can still copy the link
      // window.history.pushState(null, '', hash);
    }
  };

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {vertNavLinks.map((item) => {
          const isActive = activeSection === item.href.substring(1);

          return (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`group flex items-center py-3 cursor-pointer ${isActive ? 'active' : ''}`}
              >
                {/* The Extending Line */}
                <span 
                  className={`mr-4 h-px transition-all duration-300 
                    ${isActive 
                      ? 'w-16 bg-accent' 
                      : 'w-8 bg-foreground/30 group-hover:w-16 group-hover:bg-foreground'
                    }`}
                ></span>
                
                {/* The Text Label */}
                <span 
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 
                    ${isActive 
                      ? 'text-accent' 
                      : 'text-foreground/50 group-hover:text-foreground'
                    }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}