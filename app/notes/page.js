import PageLayout from "../components/pageLayout";
import Hero from "../components/Hero";
import getPostMetadata from "../utils/getPostMetadata";
import Link from "next/link";

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
            <div key={year} className="mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold border-l-4 border-amber-400 pl-4  mb-2">{year}</h2>
              <ul className="space-y-3 pl-3 border-l border-amber-300">
                {groupedByYear[year]
                  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
                  .map((post) => (
                    <li key={post.slug} className="hover:bg-[var(--color-shade)] p-2 rounded-r-lg">
                      <Link href={`/notes/${post.slug}`} className="text-[var(--color-link)] hover:underline font-medium">
                        {post.title}
                      </Link>
                      <div className=" text-gray-500">
                        {post.tags}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

      </section>
      </div>
    </PageLayout>
  );
}
