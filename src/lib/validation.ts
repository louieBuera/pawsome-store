import { Species } from '@/types/species';
import { z } from 'zod';

export const petFormSchema = z.object({
  name: z.string().min(3).max(60),
  species: z.nativeEnum(Species),
  breed: z.string().min(3).max(60),
  image_url: z.string().url().refine(async (url) => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      const contentType = res.headers.get("content-type");
      return contentType?.startsWith("image/");
    } catch {
      return false;
    }
  }),
  // width: z.number().positive().lte(10000),
  // height: z.number().positive().lte(10000)
});