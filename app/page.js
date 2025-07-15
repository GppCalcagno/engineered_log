  import PageLayout from "./components/pageLayout";
  import Hero from "./components/Hero";
  import fs from 'fs';
  import path from 'path';
  import matter from 'gray-matter';
  import Link from 'next/link';

  import Image from 'next/image';  // Import the Image component from Next.js

  // 1. Fetch the latest articles metadata from the content folder
  async function getLatestArticles() {
    const postsDirectory = path.join(process.cwd(), "content", "blog");
    const files = fs.readdirSync(postsDirectory);

    const articles = files
      .map((file) => {
        const filePath = path.join(postsDirectory, file, 'index.mdx');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return {
          slug: file,
          ...data,
        };
      })
      .filter((post) => post.isPublished) // Filter out unpublished posts
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) // Sort by latest published
      .slice(0, 3); // Get only the latest 3 posts

    return articles;
  }

  // 2. Fetch the latest projects from the JSON file
  async function getLatestProjects() {
    const projectsPath = path.join(process.cwd(), 'content', 'somejson', 'projects.json');
    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
    return projects.slice(0, 3); // Get only the top 3 latest projects
  }

  export default async function Home() {
    // Fetch data
    const latestArticles = await getLatestArticles();
    const latestProjects = await getLatestProjects();

    return (
      <PageLayout>
        <Hero
          title="Welcome 👋"
          subtitle="I’m a Computer Science Engineer passionate about coding. I like computers, problems, and using the former to solve the latter."
          subtitle2="This is my little corner of the internet where I share what I learn, think, and sometimes do."
          image="illustration/home2.svg"
        />

        {/* Latest Notes */}
        <section className="py-6 md:px-5">
          
            <div className="flex items-baseline mb-2">
              <h2 className="text-3xl font-bold">Latest Notes</h2>
              <Link href="/notes" className="sm: pl-5 text-[var(--color-link)] text-xs">Show More</Link>
            </div>
            <p className="mb-6">{" I don’t write often. These are the latest notes I felt were worth the effort - for me to share, and hopefully for you to read!"}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/notes/${article.slug}`}
                  className="group flex gap-4 p-3 border border-[var(--color-cards-description)] rounded-md hover:scale-105 hover:shadow-md transition-all bg-[var(--color-sidebar)] max-w-sm"
                >
                  {/* Icon instead of large image */}
                  <div className="flex-shrink-0 pt-1">
                    <Image
                      src={`/blog/${article.slug}/${article.icon}`}
                      alt="Article icon"
                      width={40}
                      height={40}
                      className="opacity-60 group-hover:opacity-100"
                    />
                  </div>

                  {/* Textual content */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="font-semibold text-lg text-[var(--color-text)]">{article.title}</h3>
                        <p className="text-sm text-[var(--color-text)] mt-1 line-clamp-2">{article.description}</p>
                        <p className="text-xs text-[var(--color-link)] mt-2"></p> 
                      </div>
                      
                      <p className="text-xs text-[var(--color-link)] mt-2">
                        {article.category} - {new Date(article.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
              ))}
            </div>
          
        </section>

        {/* Latest Projects */}
        <section className="py-6 md:px-5">
          <div className="flex items-baseline mb-2">
            <h2 className="text-3xl font-bold">Latest Projects</h2>
            <Link href="/projects" className="sm: pl-5 text-[var(--color-link)] text-xs">Show More</Link>
          </div>
          <p className="mb-6">{"Some of the projects I've been working on recently."}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {latestProjects.map((project, index) => (
              <div key={index} className="sm:max-w-sm rounded-xl overflow-hidden shadow-md bg-[var(--color-cards-description)]  hover:scale-102 transition-all duration-100"> 
                <Image
                  className="w-full h-32 object-cover"
                  src={`/projects/${project.imgPath}`}
                  alt={project.title}
                  width={500} // Add a fixed width to optimize loading
                  height={200} // Add a fixed height to optimize loading
                />
                <div className="px-4 py-3 rounded-xl bg-[var(--color-cards-description)]">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm ">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="py-3"/>
      </PageLayout>
    );
  }
