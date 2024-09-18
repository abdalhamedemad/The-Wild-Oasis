import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}//storage/v1/object/public/cabins-images/${imageName}`;
  //https://sddrlswdexujrgxktiva.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg?t=2024-09-16T09%3A42%3A45.446Z
  // 1. Create/Edit a cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B) EDIT
  else query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  if (hasImagePath) return data;
  // 2. Upload the image if the cabin was created successfully
  const { error: storageImageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if the image could not be uploaded successfully
  if (storageImageError) {
    console.error(storageImageError);
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
