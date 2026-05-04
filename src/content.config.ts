import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/blog',
	}),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		readingTime: z.string(),
		tags: z.array(z.string()).min(1),
	}),
});

export const collections = {
	blog,
};