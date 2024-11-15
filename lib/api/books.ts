export async function getCategories() {
  const response = await fetch(
    'https://books-api.nomadcoders.workers.dev/lists',
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  return data.results;
}

export async function getBookList(name: string) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${name}`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await response.json();
  return data.results;
}
