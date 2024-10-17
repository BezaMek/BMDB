import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import Hamburger from "./Hamburger.jsx";
import MovieDb from"../assetes/Movie_DB.jpg"
import Search from "./Search.jsx";
export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const[oneVisible,setOneVisible] = useState(false);
  const containerRef = useRef(null);
  const[notifVisible, setTwoVisible] = useState(false);
  // const [isSearch, setSearch] = useState(false);

  // const seachHandelClick=()=>{
  //   setSearch(!isSearch)
  // }

const twoHandClick=()=>{
  setTwoVisible(!notifVisible)
}

  const oneHandelClick=()=>{
setOneVisible(!oneVisible);
  }
 
  const handleClick = () => {
    setIsVisible(!isVisible);
  
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOneVisible(false);
        setIsVisible(false);
        setTwoVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    return (
  <div>  
     <div className="justify-between items-center bg-blue-950 h-16 hidden  md:flex cursor-pointer sm:z-50 z-50">
    <div className="flex space-x-2 ml-5 ">
    <Link to="/">
      <div className="flex items-center space-x-2">
    
      <a className="text-blue-500 text-2xl font-bold">TMDB</a>
    <div className="w-16 h-5 border-2 border-blue-500 bg-blue-500  rounded-full"></div>
   
     </div>
     </Link>
    <div className="flex pl-10 space-x-5">
<div className="relative group">
    <span className="text-white font-semibold">Movies</span>
    <div className="absolute w-32 bg-white text-center text-black rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <div className="flex flex-col mt-2 mb-2 z-50">
    <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
    </div>
    </div>
    </div>
    <div className="relative group">
    <span className="text-white font-semibold">Popular</span>
    <div className="absolute w-32 bg-white text-center text-black rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <div className="flex flex-col mt-2 mb-2">
    <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
    </div>
    </div>
    </div>
    <div className="relative group">
    <span className="text-white font-semibold">TV shows</span>
    <div className="absolute w-32 bg-white text-center text-black rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <div className="flex flex-col mt-2 mb-2">
    <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
    </div>
    </div>
    </div>
    <div className="relative group">
    <span className="text-white font-semibold">People</span>
    <div className="absolute w-32 bg-white text-center text-black rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <div className="flex flex-col mt-2 mb-2">
    <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test</span>
      <span className="py-1 px-2 hover:bg-gray-200">Test Test</span>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="flex space-x-6 m-10">
<div className="relative group"  ref={containerRef}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"  className="size-6" onClick={handleClick}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  
</svg>
{isVisible && (
        <div className="absolute flex flex-col w-40 h-20 text-center bg-gray-100 border border-gray-300 rounded">
         <span className="hover:bg-gray-200 pt-3">Add new movie</span>
         <span className="hover:bg-gray-200 pt-3">Add new TV show</span>
        </div>
      )}
</div>
  
    
<div className="relative group" ref={containerRef}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"stroke="white"  className="size-6" onClick={twoHandClick}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
</svg>
{notifVisible&&(
   <div className="absolute flex flex-col w-40 h-20 text-center bg-gray-100 border border-gray-300 rounded">
   <span className="hover:bg-gray-200 pt-3">Add new movie</span>
   <span className="hover:bg-gray-200 pt-3">Add new TV show</span>
  </div>
)}
</div>
<div className="relative group"  ref={containerRef} >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6" onClick={oneHandelClick}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
{oneVisible&&(
   <div className="absolute flex flex-col w-40 h-20 text-center bg-gray-100 border border-gray-300 rounded">
   <span className="hover:bg-gray-200 pt-3">Add new movie</span>
   <span className="hover:bg-gray-200 pt-3">Add new TV show</span>
  </div>
)}
</div>
<Link to="/Login">
 
 
 <a href="" className="font-medium text-lg text-white">Login</a>
 
</Link>
    <div className="w-full m-0">
    <Search/>
 
</div>

      </div>

   </div>   
    <div className="md:hidden flex items-center justify-between bg-blue-950 p-3"> 
      <div className="flex">
        <Hamburger/>
        
 

</div>
<div className="justify-center items-center flex"><img src={MovieDb} alt="" className="w-14 h-14"/></div>
<div className="flex space-x-4">

<div className="relative group " ref={containerRef}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6" onClick={handleClick}>
  <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
</svg>

{isVisible && (
        <div className="absolute right-2 flex flex-col w-40 h-20 text-center bg-gray-100 border border-gray-300 z-50 rounded">
         <span className="hover:bg-gray-200 pt-3">Add new movie</span>
         <span className="hover:bg-gray-200 pt-3">Add new TV show</span>
        </div>
      )}
</div>

<Link to="/Login">
 
 
 <a href="" className="text-white font-semibold text-lg">Login</a>
 
</Link>
<Search/>
</div>

  </div>

  </div>

 
    );
  }