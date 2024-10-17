import Header from "./Header";
import PageResult from "./SearchPageResult.jsx";
import Footer from "./Footer.jsx"
import FastFur from "../assetes/imgg.webp";
import { useSearchParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [movieList, setMovieList] = useState([]);
  const [selection, setSelection] = useState("movie");
  useEffect(() => {
    fetch( `https://api.themoviedb.org/3/search/${selection}?query=${query}&include_adult=false&language=en-US&page=1`, {
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
  const handleClick = (value) => {
    if(value){
      setSelection(value);
      fetch(`https://api.themoviedb.org/3/search/${selection}?query=${query}&include_adult=false&language=en-US&page=1`, {
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
      <Header />
      <div className="sm:flex">
      
         
            {movieList&& ( <div className="border border-gray-400 sm:w-72 sm:m-16 sm:h-[310px] hidden md:block rounded-lg cursor-pointer">
             <div className="sm:w-72 border border-blue-500 bg-blue-500 p-5 rounded-t-lg">   
                  <h2 className="text-white text-xl font-semibold">Search Results</h2>
          </div>
          <div className="py-2 ">
            <div className={`flex group  px-5 py-1 hover:bg-slate-300 ${selection==="movie"}`} onClick={() => handleClick('movie')}>
              <button className="flex">Movie
              <div className="border border-gray-300 bg-gray-300  w-8 text-sm  text-center group-hover:bg-[#fff] group-hover:border-[#fff] rounded-lg">
                <span className="">44</span>
              </div></button>
            </div>
            <div className="flex group justify-between px-5 py-1 space-x-8 hover:bg-slate-300"  onClick={() => handleClick('tv')}>
              <button className= "flex">Tv shows
              <div className="border border-gray-300 bg-gray-300  w-8 text-sm text-center group-hover:bg-[#fff] group-hover:border-[#fff] rounded-lg">
                <span>44</span>
              </div></button>
            </div>
            <div className="flex group justify-between px-5 py-1 hover:bg-slate-300" onClick={() => handleClick('person')}>
              <button className="flex" >People
              <div className="border border-gray-300 bg-gray-300  w-8 text-sm  text-center group-hover:bg-[#fff] group-hover:border-[#fff] rounded-lg">
                <span>44</span>
              </div></button>
            </div>
            <div className="flex group justify-between px-5 py-1 hover:bg-slate-300" onClick={() => handleClick('company')}>
              <button className="flex">Companies
              <div className="border border-gray-300 bg-gray-300  w-8 text-sm  text-center group-hover:bg-[#fff] group-hover:border-[#fff] rounded-lg">
                <span>44</span>
              </div></button>
            </div>
            <div className="flex group justify-between px-5 py-1 hover:bg-slate-300" onClick={() => handleClick('collection')}>
              <button className="flex">Collections
              <div className="border border-gray-300 bg-gray-300  w-8 text-sm  text-center group-hover:bg-[#fff] group-hover:border-[#fff] rounded-lg">
                <span>44</span>
              </div></button>
            </div>
            <div className="flex group justify-between px-5 py-1 hover:bg-slate-300" onClick={() => handleClick('keyword')}>
              <button className="flex" >Keywords
              <div className="border border-gray-300 bg-gray-300  w-8 text-sm  text-center group-hover:bg-[#fff] group-hover:border-[#fff] rounded-lg">
                <span>44</span>
              </div></button>
            </div>
            <div className="flex group justify-between px-5 py-1 hover:bg-slate-300" onClick={() => handleClick('tv')}>
              <button className="flex" >Network
              <div className="border border-gray-300 bg-gray-300  w-8 text-sm  text-center group-hover:bg-[#fff] group-hover:border-[#fff] rounded-lg">
                <span>44</span>
              </div></button>
            </div>
            
          </div>  </div>
            )}
      
      
      <div className="flex flex-col gap-3 mt-16 mb-10">
  {movieList.map((page, index) => (
    <Link
      key={index} 
      to={`/${selection}/` + page.id} // This will navigate to either /movie/id or /tv/id based on the selection
    >
      <div
        className={`cursor-pointer`}  // Added cursor-pointer to make it clear that it's clickable
        onClick={() => handleClick(selection)} // Use the selection value to decide whether it's movie or tv
      >
        {page.poster_path ? (
          <PageResult
            MovieName={page.title || page.original_name || page.name}
            NativeNamw={page.original_title}
            Date={page.release_date ? page.release_date : page.first_air_date}
            Paragraph={page.overview}
            IMG={
              "https://media.themoviedb.org/t/p/w220_and_h330_face/" +
              page.poster_path
            }
          />
        ) : (
          ""
        )}
      </div>
    </Link>
  ))}
</div>

   
      
      </div>
       <Footer/>
    </div>
  );
}
