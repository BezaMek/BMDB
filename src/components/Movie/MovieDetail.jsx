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
    
  }, 
  [id,selected]);
  // console.log(movie.credits);
  return (
 
  
        <div>
           {movie?(
            <div>
            <Header />
      <MovieHeader />
      <MovieMain movie={movie} selected={selected}/>

      <MovieCast movie={movie} />

      <Footer />

    </div>
   ):(      <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-pulse opacity-75"></div>
    <div className="relative z-10 p-4">
      
      <div className="w-full h-8 bg-gray-300 rounded mb-4"></div>
      <div className="w-full h-80 bg-gray-300 rounded">
      <div className="w-52 h-80  bg-gray-400 rounded"></div>
 
      </div>
      <div className="flex space-x-20 w-full bg-gray-300 mt-5 rounded">
      <div className="w-40 h-64 bg-gray-400 rounded"></div>
      <div className="w-40 h-64 bg-gray-400 rounded pl-5"></div>
      <div className="w-40 h-64 bg-gray-400 rounded pl-5"></div>
      <div className="w-40 h-64 bg-gray-400 rounded pl-5"></div>
      </div>
      <div className="w-full h-44 bg-gray-300 rounded mt-5"></div>
    </div>
      </div>
      )} 

     
    </div>
  );
}
