import Header from "./Header"
import Footer from './Footer.jsx'
export default function Login(){
    return(
    <div>
         <Header/>
         <div className="w-fit flex m-10">
           
            <div className="space-y-3">
        <h1 className="font-semibold text-xl">Login to your account</h1>
        <p className="">In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an
        account is free and simple. <a href="" className="text-blue-500">Click here</a> to get started.</p>
        <p>If you signed up but didn't get your verification email, <a href="" className="text-blue-500">Click here</a> to have it resent.</p>
        <form action="">
            <label htmlFor="">Username</label> <br />
            <input type="text" id="username" className="border-2 pt-2 w-full border-gray-300 rounded-md"/>
            <br />
            <label htmlFor="">Password</label>
            <input type="text" id="username" className="border-2 pt-2 w-full border-gray-300 rounded-md"/>
            <input type="submit" value="Login" className="border-2 w-20 border-blue-500 mt-10 p-1 text-white font-bold text-sm bg-blue-500 rounded-lg"/>
            <a href="" className="text-blue-500 pl-5 text-sm">Reset Password</a>
        </form>
        </div>
        </div>
        <Footer/>
        </div>
       
    )
}