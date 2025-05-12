import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function getPostMetadata(dir) {
  const postsDirectory = path.join(process.cwd(), dir);
  const folders = fs.readdirSync(postsDirectory);

  const posts = folders.map(folderName => {
    const filePath = path.join(postsDirectory, folderName, 'index.mdx');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      title: data.title || folderName,
      description: data.description || '',
      image: data.image || null,
      publishedAt: data.publishedAt || null,
      updatedAt: data.updatedAt || null,
      author: data.author || '',
      isPublished: data.isPublished !== false,  // default true
      tags: data.tags || [],
      slug: data.slug || folderName,
    };
  });

  return posts
    .filter(post => post.isPublished)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
