import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
  releaseNotes: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/release-notes' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string(),
    }),
  }),
};
