// Helper function for turning a fetch request into json data
export async function fetchJson(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Couldn't fetch ${path}: ${res.statusText}`);
  }
  return await res.json();
}
