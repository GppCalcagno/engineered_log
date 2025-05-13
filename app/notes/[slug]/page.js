import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import PageLayout from "@/app/components/pageLayout";

export default async function NotesPage({ params }) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content",
    "blogs",
    slug,
    "index.mdx"
  );

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative w-full">
        <div className="relative aspect-video md:aspect-[4/1] md:mx-8">
          <Image
            src={`/blog/${data.image}`}
            alt={data.title}
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        <div className="bg-[var(--color-sidebar)] md:w-3/4 -mt-25 md:-mt-30 relative z-10 md:px-6 md:py-8 py-6 px-3 shadow-sm rounded-md">
          {data.tags?.length > 0 && (
            <p className="uppercase text-sm tracking-widest font-semibold mb-2">
              {data.tags[0]}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {data.title}
          </h1>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={data.publishedAt}>
              {new Date(data.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="items-center justify-center flex flex-col">
      <article className="prose prose-stone dark:prose-invert max-w-none mb-5 md:max-w-3/4 mt-10">
        <MDXRemote source={content} components={{ Image }} />
      </article>
      </div>
    </PageLayout>
  );
}
