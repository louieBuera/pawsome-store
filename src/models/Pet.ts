import { Species } from "@/types/species";
import mongoose from "mongoose";

export interface Pets extends mongoose.Document {
  name: string;
  species: Species;
  breed: string;
  image_url: string;
  width: number;
  height: number;
}

const PetSchema = new mongoose.Schema<Pets>({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet"],
    minLength: [3, "Name cannot be shorter than 3 characters"],
    maxLength: [60, "Name cannot be more than 60 characters"]
  },
  species: {
    type: String,
    enum: Object.values(Species),
    required: [true, "Please select valid species"]
  },
  breed: {
    type: String,
    required: [true, "Please breed a name for this pet"],
    minLength: [3, "Breed cannot be shorter than 3 characters"],
    maxLength: [60, "Breed cannot be more than 60 characters"]
  },
  image_url: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: [true, "Please include image width"]
  },
  height: {
    type: Number,
    required: [true, "Please include image height"]
  }
})

export default mongoose.models.Pet || mongoose.model<Pets>("Pet", PetSchema);