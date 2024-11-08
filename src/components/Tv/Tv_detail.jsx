import TvHeader from "../Movie/MovieHeader.jsx";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import TvMain from "./Tv_main.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TvCast from "./Tv_cast.jsx";
export default function Tv({selected}) {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${selected}/${id}?append_to_response=credits&language=en-US`,
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
  return (
    <div>
      <Header />
      <TvHeader />
      <TvMain movie={movie} />
      <TvCast movie={movie} />
      <Footer />
    </div>
  );
}