import { useState } from "react"

export default function Hamburger(){
    const[clickMenu,setClickMenu]= useState(false);
    const HandClickMenu=()=>{
        setClickMenu(!clickMenu)
    }
    return(
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6" onClick={HandClickMenu}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
 {clickMenu&&(
    <div className="fixed flex flex-col w-2/3 h-full p-5 bg-blue-950 bg-opacity-90 z-50">
    <div className="flex flex-col">      
   <a href="/"  className="text-white font-bold">Movies</a>
 <a href="/" className="text-white font-bold">TV shows</a>
 <a href="/" className="text-white font-bold">People</a>
 </div>
    <div className="flex flex-col pt-5"> 
 <a href="/" className="text-slate-300 font-medium text-sm">Contribution Bible</a>
 <a href="/" className="text-slate-300 font-medium text-sm">Disscussions</a>
 <a href="/"  className="text-slate-300 font-medium text-sm">Leaderboard</a>
 <a href="/" className="text-slate-300 font-medium text-sm">API</a>
 <a href="/"  className="text-slate-300 font-medium text-sm">Support</a>
 <a href="/"  className="text-slate-300 font-medium text-sm">About</a></div>

        
   <span className="pt-5 text-slate-300 font-medium text-sm" >Log out</span>
    </div>
 
 )}
        </div>
    )
}