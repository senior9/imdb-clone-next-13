import ResultsData from "@/components/ResultsData";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Error to get data");
  }
  const data = await res.json();
  const results = data.results;

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
