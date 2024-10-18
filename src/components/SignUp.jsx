import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function SignUp (){
    return(
        <div>
            <Header/>
       <div className="m-10">
            <h1 className="font-bold text-xl">Sign up for an account</h1>
            <p className="pt-5">Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
           <form action="" className="pt-5">
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" className="border pt-2 pl-2 border-black w-full rounded" />
            <div className="pt-5">
                <label htmlFor="">Password (4 characters minimum)</label>
            <input type="password" name="" id="" className="border pt-2 pl-2 border-black w-full rounded" /> 
            </div>
            <div className="pt-5">
                <label htmlFor="">Password Confirm</label>
            <input type="password" name="" id="" className="border pt-2 border-black w-full rounded" /> 
            </div>
            <div className="pt-5">
                <label htmlFor="">Email</label>
            <input type="email" name="" id="" className="border pt-2 pl-2 border-black w-full rounded" /> 
            </div>
            <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
            <div className="pt-5">
          
<Link to="/SignUp">
  <button className="border border-blue-500 w-auto p-2 bg-blue-700 font-bold text-sm text-white rounded">
    Sign Up
  </button>
</Link>

<a href="/" className="pl-2 text-blue-500">Cancel</a>

            </div>
          
            </form> 
        </div>  
      <Footer/>
        </div>
        
    )
}