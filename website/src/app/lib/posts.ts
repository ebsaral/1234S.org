import fs from 'fs';
import matter from 'gray-matter';
import { LocalesValues } from 'intlayer';
import path from 'path';
import { availableLocales } from '../../../helpers';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostMeta = {
  slug: string;
  name: string;
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

const getMetadata = (slug: string, locale: LocalesValues, data: Record<string, string>): PostMeta => {
  return {
    slug,
    name: data.name,
    title: data.title,
    subtitle: data.subtitle,
    image: data.image,
    created: data.created,
    updated: data.updated ?? null,
    authorName: data.authorName,
    authorUrl: data.authorUrl,
    published: Boolean(data.published),
    locale,
  };
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(postsDirectory);

  const posts: Post[] = files.map((filename) => {
    const name = filename.replace('.md', '');
    const [slug, locale] = name.split('.');
    const fullPath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    const { content, data } = matter(fileContent);

    return { content, metadata: getMetadata(slug, locale, data) };
  });

  // Filter out unpublished
  return posts.filter((post) => post.metadata.published);
}

export type Post = {
  content: string;
  metadata: PostMeta;
};

export type LocalePostPair = Record<LocalesValues, Post | null>;

export function getPost(slug: string): LocalePostPair {
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
        metadata: getMetadata(slug, locale, data),
      };

      return [locale as LocalesValues, post];
    }),
  ) as LocalePostPair;

  return post;
}
