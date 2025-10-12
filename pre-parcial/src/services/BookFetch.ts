export async function fetchBooksFromAPI() {
  const res = await fetch("https://openlibrary.org/search.json?q=King");
  const data = await res.json();

  return data.docs.slice(0, 20).map((item: any) => ({
    id: item.key,
    title: item.title,
    author: item.author_name ? item.author_name[0] : "Unknown",
    year: item.first_publish_year || "N/A",
  }));
}
