import Header from "../Header.jsx";
import MovieHeader from "./MovieHeader.jsx";
import MovieMain from "./MovieMain.jsx";
import MovieCast from "./MovieCast.jsx";
import Footer from "../Footer.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MovieDetail({ selected }) {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMovie(data || null))
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(movie.credits);
  return (
    <div>
      <Header />
      <MovieHeader />
      <MovieMain movie={movie} />

      <MovieCast movie={movie} />

      <Footer />
    </div>
  );
}
