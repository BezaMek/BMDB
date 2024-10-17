import { useState,useEffect} from "react";

import Popular from "./Popular";
import Button from "./Button";
import TrailerCard from "./TrailerCard.jsx"
import BG from "../assetes/BG.jpeg"
import { useParams } from "react-router-dom";
 
export default function Trailer({}) {
  // const [selected, setSelected] = useState(null);
  const [selcted, setSelected] = useState(null);
  const [selection, setSelection] = useState("day");
 

  const [trailerList, setTrailerList] = useState([]);
  
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, []);
 

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setTrailerList(data.results || []))
//       .catch((err) => console.log(err));}, []);
//   // const handClick = (type) => {
//   //   setSelected((prevSelected) => (prevSelected === type ? null : type));
//   // };
//   const handleSelectionClick = (value) => {
//  if(value){
//   setSelection(value);
//   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => setTrailerList(data.results || []))
//     .catch((err) => console.log(err));
//  }
      
    
// }
  return (
    <div className=" "    style={{
      backgroundImage:`url(${BG})`,
      backgroundSize:"cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center",
  }  
  }>
      
   <div className="pt-2"> 
    <Button 
    PageName = "Latest Trailers"
     Button1="Popular"
      Button2="In Theathers" 
    ButtonProperties="flex gap-1 border border-green-500 rounded-full font-medium"
    ButtonColor="bg-green-500 text-white" 
    ButtonColor1=" text-black"
    PageNameStyle="font-semibold text-2xl text-white"
    // selection={selection}
    // onButtonClick={handleSelectionClick}
    /> 
   <div
   className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500">  
{movie?(
  <div>
   <TrailerCard Img={"https://media.themoviedb.org/t/p/w355_and_h200_face/"+ movie.poster_path} MovieTitle={movie.name} Season={movie.Season} videoID={movie.key}/>  
  </div>

):(null)}</div>
  

    </div>

 
     
    </div>
  );
}
