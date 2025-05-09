"use server";

import { getServerSession, Session } from 'next-auth';

import { authOptions } from '@/auth';
import { parseServerAR } from "@/lib/utils";
import Pet from '@/models/Pet';
import dbConnect from './dbConnect';
import probe from 'probe-image-size';
import { petFormSchema } from './validation';

export const addPet = async (state: any, form: FormData) => {
  const session: Session | null = await getServerSession(authOptions);

  if(!session) return parseServerAR({
    error: "Not signed in",
    status: "ERROR"
  });

  const { name, species, breed, image_url } = Object.fromEntries(
    Array.from(form)
  );

  try {
    await petFormSchema.parseAsync({name, species, breed, image_url});
    const { width, height } = await probe(image_url as string);
    const pet = { name, species, breed, image_url, width, height };
    await dbConnect();
    const result = await Pet.create(pet);
    return parseServerAR({
      ...result,
      error: "",
      status: "SUCCESS"
    })
  } catch (error) {
    console.log(error)
    return parseServerAR({
      error: JSON.stringify(error),
      status: "ERROR"
    });
  }
}