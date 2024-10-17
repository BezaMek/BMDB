import { useEffect, useState } from "react";

export default function Fetch() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=2", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovieList(data.results || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {movieList.map((region, index) => (
          <div>
            <li key={index}>{region.original_title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
