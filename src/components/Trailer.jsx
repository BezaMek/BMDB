import { useState,useEffect} from "react";

import Button from "./Button";
import TrailerCard from "./TrailerCard.jsx"
import BG from "../assetes/BG.jpeg"

 
export default function Trailer({selected}) {  
  const [movie, setMovie] = useState(null);
  const [selection, setSelection] = useState("day");
  const [bgImg, setBgImg] = useState(BG);  
  const [isHovered, setIsHovered] = useState(false);


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
      .then((data) => setMovie(data.results || []))
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
        .then((data) => setMovie(data.results || []))
        .catch((err) => console.log(err));
        
    }
    

    // Handle the value as needed
  };
 
  return (
    <div className="relative transition-all duration-500 ease-in-out"    style={{
      backgroundImage:`url(${bgImg})`,
      backgroundSize:"cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center",
      transition: "background-image 0.5s ease-in-out",
  }  
  }>
      
   <div className={`pt-2 ${isHovered ? 'bg-blue-950 opacity-80' : ''}`}> 
    <Button 
    PageName = "Latest Trailers"
     Button1="Popular"
      Button2="In Theathers" 
    ButtonProperties="flex gap-1 border border-green-500 rounded-full font-medium"
    ButtonColor="bg-green-500 text-white" 
    ButtonColor1=" text-black"
    PageNameStyle="font-semibold text-2xl text-white"
    selection={selection}
    onButtonClick={handleSelectionClick}
    /> 
<div className="flex overflow-x-scroll space-x-4 scrollbar-thin scrollbar-thumb-gray-500">
  {movie && movie.length > 0 ? (
    movie.map((item, index) => (
      <div key={index} className="flex-shrink-0"
      onMouseEnter={()=>{setBgImg(`https://media.themoviedb.org/t/p/w3840_and_h1200_multi_faces/${item.poster_path}`)
    setIsHovered(true)}}
      onMouseLeave={()=>{setBgImg(`https://media.themoviedb.org/t/p/w3840_and_h1200_multi_faces/${item.poster_path}`)}}>
        <TrailerCard 
          Img={`https://media.themoviedb.org/t/p/w355_and_h200_face/${item.poster_path}`} 
          MovieTitle={item.title} 
          Season={item.Season} 
          videoID={item.id} 
          selected={selected}
        />
      </div>
    ))
  ) : (
    <p className="ml-12 mb-5 text-white text-sm">This panel didn't return any results. Try refreshing it.</p> 
  )}
</div>


  

    </div>

 
     
    </div>
  );
}
