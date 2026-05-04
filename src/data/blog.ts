import type { CollectionEntry } from 'astro:content';

export const getPostSlug = (post: CollectionEntry<'blog'>) =>
	post.id.replace(/\.md$/, '').split('/').at(-1) ?? post.id.replace(/\.md$/, '');