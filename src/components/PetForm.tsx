"use client";

import { useActionState, useState } from 'react'
// import { useRouter } from "next/navigation";
import { Species } from '@/types/species';
import { petFormSchema } from '@/lib/validation';
import { z } from 'zod';
// import { useToast } from "@/hooks/use-toast";
import { toast } from 'react-toastify';
import { Send } from 'lucide-react';
import { addPet } from '@/lib/actions';

function PetForm() {
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  // const  { toast } = useToast();
  // const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    const formValues = {
      name: formData.get('name') as string,
      species: formData.get('species') as Species,
      breed: formData.get('breed') as string,
      image_url: formData.get('image_url') as string,
      width: formData.get('width'),
      height: formData.get('height')
    }

    try {
      await petFormSchema.parseAsync(formValues)
      const result = await addPet(prevState, formData);
    } catch (error) {
      if(error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast(<div>
          <h1 className='text-red-700 text-2xl font-semibold'>Error</h1>
          <h2 className='text-red-900 text-lg font-medium'>
            Please check your inputs and try again
          </h2>
        </div>)

        return { ...prevState, formValues, error: "Validation Failed", status: "ERROR" }
      }
      toast(<div>
        <h1 className='text-red-700 text-2xl font-semibold'>Error</h1>
        <h2 className='text-red-900 text-lg font-medium'>
          An unexpected error has occurred
        </h2>
      </div>)
      return {
        ...prevState,
        formValues,
        error: "An unexpected error has occurred",
        status: "ERROR"
      }
    }
  };



  const [ state, formAction, isPending ] = useActionState(
    handleFormSubmit,
    { error: "", status: "INITIAL" }
  )
  
  return (
    <form action={formAction}
      className='max-w-2xl mx-auto bg-white my-10 space-y-8 px-6'
    >
      <div className="flex flex-col">
        <label htmlFor="name" className='font-bold text-[18px] text-black uppercase'>Name</label>
        <input type="text" id="name"
          defaultValue={ state?.formValues?.name }
          name="name"
          className="border-[3px] border-black px-3 py-2 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
          required
          placeholder='Enter Pet Name'
        />
        { errors.name && <p className="text-red-500 mt-2 ml-5">
          { errors.name }
        </p> }
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className='font-bold text-[18px] text-black uppercase'>Species</label>
        <select name="species" id="species"
          className="border-[3px] border-black px-3 py-2 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
          defaultValue={ state?.formValues?.species }
        >
          <option>{ Species.DOG }</option>
          <option>{ Species.CAT }</option>
        </select>
        { errors.species && <p className="text-red-500 mt-2 ml-5">
          { errors.species }
        </p> }
      </div>
      <div className="flex flex-col">
        <label htmlFor="breed" className='font-bold text-[18px] text-black uppercase'>Breed</label>
        <input type="text" id="breed"
          defaultValue={ state?.formValues?.breed }
          name="breed"
          className="border-[3px] border-black px-3 py-2 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
          required
          placeholder='Enter Pet Breed'
        />
        { errors.breed && <p className="text-red-500 mt-2 ml-5">
          { errors.breed }
        </p> }
      </div>
      <div className="flex flex-col">
        <label htmlFor="image_url" className='font-bold text-[18px] text-black uppercase'>Image Link</label>
        <input type="text" id="name"
          defaultValue={ state?.formValues?.image_url }
          name="image_url"
          className="border-[3px] border-black px-3 py-2 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
          required
          placeholder='Enter Pet Name'
        />
        { errors.name && <p className="text-red-500 mt-2 ml-5">
          { errors.image_url }
        </p> }
      </div>
      <button type="submit" className="flex flex-row p-3 border rounded text-white bg-amber-400"
        disabled={isPending}
      >
        { isPending ? 'Submitting...' : 'Submit your Pitch!' }
        <Send className="size-6 ml-2"/>
      </button>
    </form>
    
  )
}

export default PetForm