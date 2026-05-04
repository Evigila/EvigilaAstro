import type { CollectionEntry } from 'astro:content';

export const getPostSlug = (post: CollectionEntry<'blog'>) =>
	post.id.replace(/\.md$/, '').split('/').at(-1) ?? post.id.replace(/\.md$/, '');

export const sortPostsByPublishDate = (posts: CollectionEntry<'blog'>[]) =>
	[...posts].sort((left, right) => right.data.publishDate.valueOf() - left.data.publishDate.valueOf());

export const getSortedTagNamesByCount = (posts: CollectionEntry<'blog'>[]) => {
	const tagCounts = posts.reduce((counts, post) => {
		post.data.tags.forEach((tag) => {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		});

		return counts;
	}, new Map<string, number>());

	return [...tagCounts.entries()]
		.sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], 'zh-CN'))
		.map(([tag]) => tag);
};