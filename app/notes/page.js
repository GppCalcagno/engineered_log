import PageLayout from "../components/pageLayout";
import Hero from "../components/Hero";
import getPostMetadata from "../utils/getPostMetadata";
import Link from "next/link";
import Image from "next/image"; // Assicurati di importare l'Image component di Next.js

export default function Notes() {
  const notes = getPostMetadata("content/blogs");

  // Raggruppa per anno
  const groupedByYear = notes.reduce((acc, post) => {
    const year = new Date(post.publishedAt).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <PageLayout>
      <Hero
        title="My Notes"
        subtitle="Here is the place where I write the relevant stuff about my life that may (not) be valuable enough to be stored in a bunch of bits."
        subtitle2="Mostly about coding, personal finance, and productivity — Occasionally, just brain dumps."
        image="illustration/blog1.svg"
      />

      <div className="flex sm:px-15">
        <section className="py-6">
          {sortedYears.map((year) => (
            <div key={year} className="mb-12">
              <div className="relative pl-6">
                {/* Linea verticale */}

                {/* Anno */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 pl-4 border-l-4 border-amber-400">
                  {year}
                </h2>

                <ul className="space-y-6 sm:pl-3">
                  {groupedByYear[year]
                    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
                    .map((post) => (
                      <li
                        key={post.slug}
                        className="group hover:bg-[var(--color-shade)] transition-all p-1.5 rounded-md max-w-5xl" 
                      >
                        <Link href={`/notes/${post.slug}`} className="flex gap-4 items-start">
                          {/* Icona */}
                          <div className="flex-shrink-0 pt-1">
                            <Image
                              src={`/blog/${post.slug}/${post.icon}`}
                              alt="Note icon"
                              width={28}
                              height={28}
                              className="opacity-60 group-hover:opacity-100"
                            />
                          </div>

                          {/* Contenuto */}
                          <div className="flex-1">
                            <h3 className="text-[var(--color-link)] text-lg font-semibold">
                              {post.title}
                            </h3>

                            <p className="text-sm text-[var(--color-text)] line-clamp-1">
                              {post.description}
                            </p>

                            <div className="mt-1 flex flex-wrap gap-2">
                              <p className="bg-amber-400 px-2 py-1 rounded-md text-sm font-semibold">{post.category}</p>
                              {post.tags.map((tag) => (
                                <span key={tag} className="bg-[var(--color-shade)] text-xs px-1 py-1 rounded-md text-[var(--color-text)]">
                                  #{tag}
                                </span>
                              ))}
                            </div>

                            <div className="text-xs text-gray-500 mt-1">
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </section>


      </div>
    </PageLayout>
  );
}
