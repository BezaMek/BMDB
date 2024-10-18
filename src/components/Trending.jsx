import { useState, useEffect } from "react";

import freQuency from "../assetes/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function Trending() {
 
  const [movieList, setMovieList] = useState([]);
  const [selection, setSelection] = useState("day");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/${selection}?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results || []))
      .catch((err) => console.log(err));
  }, [selection]);

  const handleSelectionClick = (value) => {
    if (value) {
      setSelection(value);
      fetch(
        `https://api.themoviedb.org/3/trending/movie/${selection}?language=en-US`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setMovieList(data.results || []))
        .catch((err) => console.log(err));
    }

    // Handle the value as needed
  };

  return (
    <div>
      <Button
        PageName="Trending"
        Button1="Today"
        Button2="This Week"
        ButtonProperties="flex gap-1 border border-black rounded-full font-medium"
        ButtonColor="bg-black text-green-400"
        ButtonColor1="bg-white text-black"
        PageNameStyle="font-semibold text-2xl"
        selection={selection}
        onButtonClick={handleSelectionClick}
      />

      <div
        className="flex gap-5 lg:space-y-0 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-500 sm:overflow-y-hidden whitespace-nowrap sm:overflow-x-scroll sm:whitespace-nowrap"
        style={{
          backgroundImage: `url(${freQuency})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-10 my-5 space-x-5 mb-16">
          {movieList.map((movie, index) => (
            <Link to={"movie/" + movie.id} className="p-2">
              <div
                key={index}
                className="relative w-32 h-52 shadow-lg inline-block"
              >
                <img
                  src={
                    "https://media.themoviedb.org/t/p/w220_and_h330_face/" +
                    movie.poster_path
                  }
                  alt="no pic"
                  className="rounded-lg w-32 h-52 object-cover"
                />
                <div className="absolute -bottom-5 border-2 border-gray-900 bg-gray-900 w-10 h-10 ml-2 text-center shadow-lg inline-block snap-center rounded-full">
                  <span className="flex items-center justify-center h-full text-white text-sm">
                    {movie.vote_average
                      ? `${Math.floor(movie.vote_average * 10)}%`
                      : null}
                  </span>
                </div>
                <div className="flex flex-col pt-5">
                  <span className="font-bold text-ellipsis whitespace-pre-line line-clamp-2 overflow-hidden">
                    {movie.title}
                  </span>
                  <span className="">
                    {movie.release_date ? movie.release_date.slice(0, 4) : null}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
