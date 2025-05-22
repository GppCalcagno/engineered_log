import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import PageLayout from "@/app/components/pageLayout";

// 1. Static generation: define all dynamic slugs
//  generateStaticParams is a Next.js function used to define dynamic routes that should be generated statically at build time
// It returns an array of objects, each containing a slug property that corresponds to a folder name in the content/blogs directory.
// The NotesPage component is now rendered statically for each slug. At build time, Next.js uses generateStaticParams to generate a 
// page for each available slug, and it uses the MDX content from the corresponding .mdx file for that blog post

export async function generateStaticParams() {
  const notesDirectory = path.join(process.cwd(), "content", "blogs");
  const folders = fs.readdirSync(notesDirectory);

  return folders.map((folder) => ({
    slug: folder,
  }));
}

// 2. Page component for each static [slug]
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
      {/* Header section */}
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

      {/* MDX content */}
      <div className="items-center justify-center flex flex-col">
        <article className="prose prose-stone dark:prose-invert mb-5 mt-10 w-full px-4 md:max-w-3/4">
          <MDXRemote source={content} components={{ Image }} />
        </article>
      </div>
    </PageLayout>
  );
}
