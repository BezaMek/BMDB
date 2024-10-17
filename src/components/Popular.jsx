import { useState, useEffect} from "react";

import insideOut from "../assetes/inside_out.jpg";
import the100 from "../assetes/the100.jpg";
import { Link } from "react-router-dom";
export default function Popular(){
    // const movieList = [
    //     {
    //       title: "Movie 1",
    //       thumbnail: fastFur,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     },
    //     {
    //       title: "Movie 1",
    //       thumbnail: insideOut,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     },
    //     {
    //       title: "Movie 1",
    //       thumbnail: the100,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     },
    //     {
    //       title: "Movie 1",
    //       thumbnail: insideOut,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     },
    //     {
    //       title: "Movie 1",
    //       thumbnail: insideOut,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     },
    //     {
    //       title: "Movie 1",
    //       thumbnail: insideOut,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     },
    //     {
    //       title: "Movie 1",
    //       thumbnail: insideOut,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     },
    //     {
    //       title: "Movie 1",
    //       thumbnail: insideOut,
    //       rating: 80,
    //       releast_date: "12/12/2024",
    //     }
    //   ];
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
    const handelBtnClick = ()=>{
      fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
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
    
    return(
  
    

     <div
     className="flex gap-5 lg:space-y-0 bg-white overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-500 sm:overflow-y-hidden whitespace-nowrap sm:overflow-x-scroll sm:whitespace-nowrap">
     <div className="flex flex-col"> 
      <div className="flex items-center mx-10 my-5 space-x-3">
        <h1 className="text-xl font-semibold">What's Popular</h1>
        
<button className="border border-black w-28 h-7 rounded-full text-green-600 font-semibold bg-blue-950" onClick={handelBtnClick}>
  In Theathers
</button>
     </div>   
       <div className="space-x-5 mx-10 my-5 mb-16"> 
         {movieList.map((movie, index) => (
        <Link to={"movie/"+movie.id} className="p-2">
          <div
            key={index}
            className="relative w-32 h-52 shadow-lg inline-block "
          >
            <img
              src={"https://media.themoviedb.org/t/p/w220_and_h330_face/"+movie.poster_path}
              alt="no pic"
              className="rounded-lg w-32 h-52 object-cover"
            />
            <div className="absolute -bottom-5 border-2 border-gray-900 bg-gray-900 w-10 h-10 ml-2 text-center shadow-lg inline-block snap-center rounded-full">
              <span className="flex items-center justify-center h-full text-white text-sm">
                {movie.vote_average ?`${Math.floor(movie.vote_average*10)}%`:null}
              </span>
            </div>
            <div className="flex flex-col md:pt-5 pl-2 pt-5">
              <span className="font-bold text-ellipsis whitespace-pre-line line-clamp-2 overflow-hidden">{movie.title}</span>
              <span className=" ">{movie.release_date?(movie.release_date.slice(0,4)):(null)}</span>
            </div>
          </div>
        </Link>
      ))}</div>
    </div>
   
    </div>  
  
    )
}