import { createClient } from "./supabase";

export async function fetchCourses() {
  // Graceful error if environment variables are missing
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("Supabase credentials are not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.");
  }

  const supabase = await createClient();
  
  // Simulate slight network delay to ensure Suspense loading skeletons are visible (per PDF requirements)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error(`Supabase Error: ${error.message}`);
  }

  return data || [];
}
