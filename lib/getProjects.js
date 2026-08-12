import { supabase } from "./supabaseClient";
import { fallbackProjects } from "./fallbackProjects";

export async function getProjects() {
  if (!supabase) return fallbackProjects;

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) {
    return fallbackProjects;
  }

  return data.map((row) => ({
    id: row.id,
    title: row.title,
    category: row.category || "webdev",
    description: row.description,
    features: row.features || [],
    tech: row.tech || [],
    image: row.image,
    url: row.url,
  }));
}
