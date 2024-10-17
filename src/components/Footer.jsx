import { Link } from "react-router-dom";
import Movieimg from "../assetes/Movie_DB.jpg"
export default function Footer(){
    return(
        
           <footer className="border border-blue-950 w-full sm:w-full h-auto bg-blue-950 p-10">
            <div className="flex flex-col m-4">
               <div className="flex-wrap justify-center space-x-5 sm:float-left sm:flex">
               <img src={Movieimg} alt="" className="w-40 h-40 hidden sm:block"/> 
               <Link to='/Login'>
               <div className="border border-white bg-white shadow-lg sm:hidden w-fit">
                <span className="text-blue-600 p-5 text-center font-semibold">Join the community</span>
               </div>
               </Link>
               <div className="p-5 sm:p-2 flex flex-col">
                <h1 className="font-bold text-white">The Basics</h1>
                <a href=""className="text-white">About TMDB</a>
               <a href=""className="text-white">Contact Us</a>
                <a  href="" className="text-white">Support Forums</a>
               </div>
               <div className="p-5 sm:p-2 flex flex-col">
                <h1 className="text-white font-bold">Get Involved</h1>
                <a href="" className="text-white">Contribution Bible</a>
                 <a href=""className="text-white">Add New Movie</a>
                 <a href="" className="text-white">Add New TV Show</a>
               </div>
               <div className="p-5 sm:p-2 flex flex-col">
                <h1 className="text-white font-bold">Community</h1>
                <a href=""className="text-white">Guidelines</a>
                <a href=""className="text-white">Discussion</a>
                <a href=""className="text-white">Leaderboard</a>
               </div>
               {/* <div className="p-5">
                <h1>Legal</h1>
                <p>Terms of Use</p>
                <p>API Terms of Use</p>
                <p>Privacy Policy</p>
                <p>DMCA Policy</p>
               </div> */}
               </div>
              
            </div>

            </footer> 
    )
}