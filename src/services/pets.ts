import dbConnect from "@/lib/dbConnect";
import Pet, { Pets } from "@/models/Pet";
import { ImageDetails } from "@/constants/images";

export async function getPets(): Promise<ImageDetails[]> {
  await dbConnect();
  try {
    const pets: Pets[] = await Pet.find({});
    const details: ImageDetails[] = [];
    for(const pet of pets){
      details.push({
        src: pet.image_url,
        alt: pet.name,
        width: pet.width,
        height: pet.height
      })
    }
    return details;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createPet(pet: Pets): Promise<Pets> {
  await dbConnect();
  try {
    const result: Pets = await Pet.create(pet);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}