import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Welcome from "./components/Welcome.jsx";
import Trending from "./components/Trending.jsx";
import MovieDetail from "./components/Movie/MovieDetail.jsx";

import LeaderBord from "./components/LeaderBord.jsx";
import Footer from "./components/Footer.jsx";

import Popular from "./components/Popular.jsx";
import JoinToday from "./components/JoinToday.jsx";

import SearchPage from "./components/SearchPage.jsx";
import SignUp from "./components/SignUp.jsx";
export default function App() {
  const [selected, setSelected] = useState("movie");
  const handleClick = (type) => {
    setSelected(type);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Welcome />

          <Trending />
          {/* <Trailer/>  */}
          <Popular />
          <JoinToday />
          <LeaderBord />
          <Footer />
        </>
      ),
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      path: "SignUp",
      element: <SignUp />,
    },
    {
      path: `/${selected}/:id`,
      element: (
        <MovieDetail
          selected={selected === "movie"}
          onClick={() => handleClick("movie")}
        />
      ),
    },
    {
      path: `/${selected}/:id`,
      element: (
        <MovieDetail
          selected={selected === "tv"}
          onClick={() => handleClick("tv")}
        />
      ),
    },
    {
      path: "Popup",
      element: <MovieDetail />,
    },
    {
      path: "search",
      element: <SearchPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
