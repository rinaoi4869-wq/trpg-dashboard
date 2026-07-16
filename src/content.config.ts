import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // ★ AStro v6用の新しい読み込み道具

// 探索者データの定義
const characters = defineCollection({
  // ★ astro:loaders を使って「content/characters」フォルダ内のmdを読み込む設定
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

// 定義したものをAstroに登録
export const collections = { characters };