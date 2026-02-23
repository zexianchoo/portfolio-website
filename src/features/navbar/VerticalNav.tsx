import { vertNavLinks } from "@/features/navbar/NavLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Link } from '@tanstack/react-router';

export default function VerticalNav() {
  const sectionIds = vertNavLinks.map((link) => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {vertNavLinks.map((item) => {
          const isActive = activeSection === item.href.substring(1);

          return (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`group flex items-center py-3 ${isActive ? 'active' : ''}`}
              >
                <span 
                  className={`mr-4 h-px transition-all duration-300 
                    ${isActive 
                      ? 'w-16 bg-accent' 
                      : 'w-8 bg-foreground/30 group-hover:w-16 group-hover:bg-foreground'
                    }`}
                ></span>
                
                <span 
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 
                    ${isActive 
                      ? 'text-accent' 
                      : 'text-foreground/50 group-hover:text-foreground'
                    }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}