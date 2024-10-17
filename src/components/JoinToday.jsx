import BGviolate from "../assetes/BGviolate.jpg"
import { Link } from "react-router-dom"
export default function JoinToday(){
    return(
        <div className=""
        style={
            {
                backgroundImage:`url(${BGviolate})`,
                backgroundSize:"cover",
            }
        }> 
        <div className="space-y-10 p-10">
                <h1 className="text-white text-3xl font-semibold">Join Today</h1>
<p className="text-white text-lg">Get access to maintain your own <span className="font-light">custom personal lists, track what you've 
    seen </span>and search and filter for what to <span className="font-light">watch next</span> —regardless if it's in theatres or on TV.</p>

    <div>   <Link to="SignUp" className="">
    <button className="border border-purple-800 p-2 text-white font-semibold  bg-purple-800 text-center shadow-lg rounded-lg">Sign Up</button> 
    </Link></div>
 
        </div>
   
        </div>
    )
}