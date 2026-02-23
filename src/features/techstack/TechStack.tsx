import { iconUrls } from "./TechStackContentMap";

const TechStack = () => {
  return (
    <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-4 sm:p-6 transition-colors">
      <p className="mb-4 text-sm font-heading font-bold uppercase tracking-widest text-foreground">
        Tech Stack & Tools
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {iconUrls.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-20 flex-col items-center rounded-lg p-2 transition-all duration-200 hover:bg-foreground/10"
          >
            <img
              src={icon.url}
              alt={icon.desc}
              style={{
                filter: icon.lowContrastOnDark ? "var(--low-contrast-filter)" : "none",
              }}
              className="h-8 w-8 object-contain transition-all duration-300 sm:h-10 sm:w-10 group-hover:scale-110 group-hover:!filter-none group-hover:!opacity-100"
            />
            <span className="mt-2 text-center text-xs text-foreground/60 transition-colors group-hover:text-accent sm:text-sm">
              {icon.desc}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechStack;