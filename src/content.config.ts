import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const characters = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/characters" }),
  schema: z.object({
    name: z.string(),
    system: z.string(),
    profession: z.string(),
    image: z.string().optional(),
    str: z.number().optional(),
    con: z.number().optional(),
    san: z.number().optional(),
    memo: z.string().optional(),
    mainColor: z.string().optional(),
    subColor: z.string().optional(),
  }),
});

const rooms = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/rooms" }),
  schema: z.object({
    rooms: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      })
    ),
  })
});

export const collections = { 
  characters, 
  rooms 
};