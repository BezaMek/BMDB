import Header from "./Header";
import Footer from "./Footer.jsx";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "test" && password === "1234") {
      setSuccess("Login Successful");
    
    } else {
      setError("Login Invalid");
     
    }
  };

  return (
    <div>
      <Header />
      <div className="w-fit flex m-10">
        <div className="space-y-3">
          <h1 className="font-semibold text-xl">Login to your account</h1>
          <p>
            In order to use the editing and rating capabilities of TMDB, as well
            as get personal recommendations, you will need to login to your
            account. If you do not have an account, registering for an account
            is free and simple.{" "}
            <a href="/" className="text-blue-500">
              Click here
            </a>{" "}
            to get started.
          </p>
          <p>
            If you signed up but didn't get your verification email,{" "}
            <a href="/" className="text-blue-500">
              Click here
            </a>{" "}
            to have it resent.
          </p>

         
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success && <div className="mb-4 text-green-500">{success}</div>}

       
          <form onSubmit={handleLogin} className="space-y-3">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`border-2 pt-2 w-full border-gray-300 rounded-md ${error?("border-2 border-red-500"):("border-gray-300")}`}
              required
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`border-2 pt-2 w-full border-gray-300 rounded-md ${error?("border-2 border-red-500"):("border-gray-300")}`}
              required
            />
            <br />
            <input
              type="submit"
              value="Login"
              className="border-2 w-20 border-blue-500 mt-10 p-1 text-white font-bold text-sm bg-blue-500 rounded-lg"
            />
            <a href="/" className="text-blue-500 pl-5 text-sm">
              Reset Password
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
