import ResultsData from "@/components/ResultsData";


export default async function Home({searchParams}) {
  const API_KEY = process.env.API_KEY;
  console.log(API_KEY)
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${
    genre === "fetchTrending" ? "movie/top_rated" : "trending/all/week"}?&api_key=${API_KEY}&language=en-US&page=1`,{ next: { revalidate: 10000 } });
  // console.log(res)
  const data = await res.json();
  const results = data.results;
  // console.log(results);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 

  return (
    <main >
        <ResultsData results={results} />
    </main>
  )
}
