import tmdbLogo from "../assetes/tmdb.png";

import Blue from "../assetes/Blue.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Welcome() {
  const [newRandomImg, setNewRandomImg] = useState(null);
  //  const images = [tmdbLogo, Blue];
  // if (images && images.length > 0) {
  //   const randomImage = images[Math.floor(Math.random() * images.length)];
  //   setNewRandomImg(randomImage);
  // }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const backdrops = data.results;
        console.log(data);
        if (backdrops && backdrops.length > 0) {
          const randomIndex = Math.floor(Math.random() * backdrops.length);
          setNewRandomImg(backdrops[randomIndex]);
        } else {
          console.log("No backdrops available");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const divStyle = newRandomImg
    ? {
        backgroundImage: `url('https://image.tmdb.org/t/p/w3840_and_h1200_multi_faces/${newRandomImg.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "10px",
      }
    : console.log("from Beza");
  console.log(`'image path:' ${newRandomImg}`);

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div style={divStyle} className="bg-blue-950 opacity-80">
      <div className="m-10 text-left">
        <h1 className="text-white font-bold text-4xl font-sans">Welcome.</h1>
        <p className="font-semibold text-2xl text-white pt-2 font-sans">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="relative mt-10">
          <form action="" className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border w-full p-3 rounded-full border-gray-300 focus:outline-none focus:border-gray-300"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <input
              type="submit"
              placeholder="Search"
              className="absolute right-0 ml-2 border-2 border-blue-400 bg-blue-400 text-white font-semibold md:w-28 w-20 h-full p-3 hover:text-black text-sm rounded-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
