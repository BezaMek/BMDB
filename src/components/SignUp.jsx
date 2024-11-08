import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div className="m-10">
        <h1 className="font-bold text-xl">Sign up for an account</h1>
        <p className="pt-5">
          Signing up for an account is free and easy. Fill out the form below to
          get started. JavaScript is required to continue.
        </p>
        <form action="" className="pt-5" onSubmit={handleSubmit}>
          <div className="pt-5">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border pt-2 pl-2 border-black w-full rounded"
            />
          </div>
          <div className="pt-5">
            <label htmlFor="password">Password (4 characters minimum)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border pt-2 pl-2 border-black w-full rounded"
            />
          </div>
          <div className="pt-5">
            <label htmlFor="confirmPassword">Password Confirm</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border pt-2 pl-2 border-black w-full rounded"
            />
          </div>
          <div className="pt-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border pt-2 pl-2 border-black w-full rounded"
            />
          </div>
          <p className="pt-5">
            By clicking the "Sign up" button below, I certify that I have read
            and agree to the TMDB terms of use and privacy policy.
          </p>
          <div className="pt-5">
            <button type="submit" className="border border-blue-500 w-auto p-2 bg-blue-700 font-bold text-sm text-white rounded">
              Sign Up
            </button>
            <Link to="/" className="pl-2 text-blue-500">
              Cancel
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
