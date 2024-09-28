import supabase from "./supabase";

// supabase automatically saves the session in the local storage (token,..)
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  // here will get the data from the local storage
  const { data: session } = await supabase.auth.getSession();

  // means the user is not logged in (no data in the local storage)
  if (!session.session) return null;

  // get the user data from the database
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
