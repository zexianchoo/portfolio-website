import { allBuildJournals } from "content-collections";

const articles = [...(allBuildJournals[0]?.articles ?? [])]
  .sort((a, b) => a.order - b.order);

export default function BuildJournals() {
  return (
    <div className="group/list">
      {articles.map((article) => (
        <a
          key={article.url}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mb-8 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
        >
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-foreground/5" />

          <time className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-foreground/50 sm:col-span-2">
            {article.date}
          </time>

          <div className="z-10 sm:col-span-6">
            <h3 className="inline-flex items-baseline font-heading font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
              {article.title}
              <span aria-hidden="true" className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </h3>

            <p className="mt-2 text-sm leading-normal text-foreground/70">
              {article.summary}
            </p>

            <ul className="relative mt-4 flex flex-wrap gap-2">
              {article.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  );
}
