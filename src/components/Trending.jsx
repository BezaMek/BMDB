import { useState, useEffect } from "react";

import freQuency from "../assetes/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function Trending() {
  // const Posters = [fastFur, insideOut, the100];
  const [selcted, setSelected] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const handClick = (type) => {
    setSelected((prevType) => (prevType === type ? null : type));
    setShowDropDown(false);
  };
  // const movieList = [
  //   {
  //     title: "Movie 1",
  //     thumbnail: fastFur,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: the100,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  //   {
  //     title: "Movie 1",
  //     thumbnail: insideOut,
  //     rating: 80,
  //     releast_date: "12/12/2024",
  //   },
  // ];
  const [movieList, setMovieList] = useState([]);
  const [selection, setSelection] = useState("day");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/${selection}?language=en-US`, {
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

  const handleSelectionClick = (value) => {
    if(value){
      setSelection(value);
      fetch(`https://api.themoviedb.org/3/trending/movie/${selection}?language=en-US`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
        },
      })
        .then((response) => response.json())
        .then((data) => setMovieList(data.results || []))
        .catch((err) => console.log(err));
    }

    // Handle the value as needed
  };
 

  return (
    <div>
      {/* <div className="flex m-5">
        <h1 className="font-semibold text-2xl">Trending</h1>
        <div className="pl-5 flex items-center space-x-2">
          <div className="sm:flex sm:border sm:border-black sm:w-44 sm:h-7 sm:justify-between  sm:bg-white border border-green-400 bg-green-400 w-28 h-8 rounded-full">
            <button
            
         
    
              className={`${
                selcted === "today"
                  ? "sm:bg-black sm:border sm:border-black sm:min-w-20 text-sm sm:text-green-400 rounded-full"
                  : ""
              }`}
              onClick={() => handClick("today")}
            >
              
              <div className="relative">
                <span className="pl-2 text-sm flex items-center">
                  Today
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 ml-1 sm:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </button>
         
            {selcted === "today" && (
              <button
                className="sm:hidden block border border-green-400 text-sm bg-green-400 w-28 h-8 pr-7  rounded-full"
                onClick={() => {
                  handClick("Week");
                }}
              >
                Week
              </button>
            )}
         
            <button
              className={`${
                selcted === "Week"
                  ? "sm:bg-black sm:border-black sm:min-w-20  sm:text-green-400 sm:text-center rounded-full"
                  : ""
              }`}
              onClick={() => handClick("Week")}
            >
              <span className="text-sm text-center hidden sm:block pr-1">
                This Week
              </span>
            </button>
          </div>
        </div>
      </div> */}
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
          <Link to={"movie/" +movie.id} className="p-2" >
            <div
              key={index}
              className="relative w-32 h-52 shadow-lg inline-block"
            >
              <img
                src={"https://media.themoviedb.org/t/p/w220_and_h330_face/"+movie.poster_path}
                alt="no pic"
                className="rounded-lg w-32 h-52 object-cover"
              />
              <div className="absolute -bottom-5 border-2 border-gray-900 bg-gray-900 w-10 h-10 ml-2 text-center shadow-lg inline-block snap-center rounded-full">
                <span className="flex items-center justify-center h-full text-white text-sm">
                {movie.vote_average?`${Math.floor(movie.vote_average*10)}%`:null}
                </span>
              </div>
              <div className="flex flex-col pt-5">
                <span className="font-bold text-ellipsis whitespace-pre-line line-clamp-2 overflow-hidden">{movie.title}</span>
                <span className="">{movie.release_date?movie.release_date.slice(0,4):null}</span>
              </div>
            </div>
          </Link>
        ))}</div>
    
      </div>
    </div>
  );
}
