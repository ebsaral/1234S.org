import fs from 'fs';
import matter from 'gray-matter';
import { LocalesValues } from 'intlayer';
import path from 'path';
import { useLocale } from 'react-intlayer/server';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostMeta = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  created: string;
  updated?: string;
  authorName: string;
  authorUrl: string;
  locale: LocalesValues;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(postsDirectory);

  const posts: PostMeta[] = files.map((filename) => {
    const name = filename.replace('.md', '');
    const [slug, locale] = name.split('.');
    const fullPath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      image: data.image,
      created: data.created,
      updated: data.updated ?? null,
      authorName: data.authorName,
      authorUrl: data.authorUrl,
      locale,
    };
  });

  // Sort by updated (newest first)
  return posts.sort((a, b) => {
    return new Date(b.updated ?? b.created).getTime() - new Date(a.updated ?? b.created).getTime();
  });
}

export type Post = Record<
  LocalesValues,
  {
    content: string;
    metadata: PostMeta;
  } | null
>;

export function getPost(slug: string): Post {
  const { availableLocales } = useLocale();
  const posts = Object.fromEntries(
    availableLocales.map((locale) => {
      const filePath = path.join(postsDirectory, `${slug}.${locale}.md`);

      if (!fs.existsSync(filePath)) {
        return [locale, null];
      }

      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const { content, data } = matter(fileContent);

      const post = {
        content,
        metadata: {
          slug,
          title: data.title,
          subtitle: data.subtitle,
          image: data.image,
          created: data.created,
          updated: data.updated,
          authorName: data.authorName,
          authorUrl: data.authorUrl,
          locale,
        },
      };
      return [locale as LocalesValues, post];
    }),
  ) as Post;

  return posts;
}
