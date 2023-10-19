import ResultsData from "@/components/ResultsData";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params.searchTerm}&api_key=${process.env.API_KEY}&language=en-US`);
  if (!res.ok) {
    throw new Error("Error to get data");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <div>
      {" "}
      {results && results === 0 && (
        <h1 className="text-center pt-6">No result Found</h1>
      )}
      {results && <ResultsData results={results} />}
    </div>
  );
}
