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
  published: boolean;
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
      published: data.published,
      locale,
    };
  });

  // Filter out unpublished, sort by updated (newest first)
  return posts
    .filter((post) => post.published)
    .sort((a, b) => {
      return new Date(b.created).getTime() - new Date(b.created).getTime();
    })
    .sort((a, b) => {
      return new Date(b.updated ?? b.created).getTime() - new Date(a.updated ?? a.created).getTime();
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
  const post = Object.fromEntries(
    availableLocales.map((locale) => {
      const filePath = path.join(postsDirectory, `${slug}.${locale}.md`);

      if (!fs.existsSync(filePath)) {
        return [locale, null];
      }

      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const { content, data } = matter(fileContent);

      if (!data.published) {
        return [locale, null];
      }

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
          published: data.published,
          locale,
        },
      };

      return [locale as LocalesValues, post];
    }),
  ) as Post;

  return post;
}
