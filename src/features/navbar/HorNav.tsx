import coffeeCup from "@/assets/coffeeCup.webp";
import { Link } from '@tanstack/react-router';
import LightDarkToggle from "@/components/LightDarkToggle";
import { horNavLinks } from "./NavLinks";

const HorNavBar = () => {
  return (
    <nav className="flex items-center justify-between p-3 mb-8 w-full rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-md shadow-xl">

        {/* Coffee Logo */}
        <div className="flex-shrink-0 pl-2">
            <Link to='/' className="block transition-transform duration-200 hover:scale-105"> 
                <img
                    src={coffeeCup}
                    alt='logo'
                    fetchPriority="high"
                    decoding="async"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-2xl hidden md:block object-cover"
                /> 
            </Link>
        </div>

        {/* actual links */}
        <div className="flex-1">
            <ul className="flex flex-wrap justify-center items-center sm:gap-x-8">
                {horNavLinks.map((item) => (
                    <li key={item.label}>
                        <Link
                            to={item.href}
                            className="px-4 py-2 text-m font-heading font-semibold tracking-wide text-foreground/70 rounded-xl transition-all duration-300 hover:text-accent hover:bg-foreground/5 hover:scale-105 inline-block"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        {/* Light / Dark */}
        <div className="flex-shrink-0 pr-2">
            <LightDarkToggle />
        </div>
    </nav>
  );
};

export default HorNavBar;