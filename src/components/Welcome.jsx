import tmdbLogo from "../assetes/tmdb.png";
import fastFurious from "../assetes/";
import Blue from "../assetes/Blue.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Welcome() {
  const [newRandomImg, setNewRandomImg] = useState(null);
  const Images = [tmdbLogo, Blue];

  useEffect(() => {
    const randomImages = Images[Math.floor(Math.random() * Images.length)];
    setNewRandomImg(randomImages);
  }, []);
  const divStyle = {
    backgroundImage: `url(${newRandomImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10px",
  };

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div style={divStyle}>
      <div className="m-10 text-left">
        <h1 className="text-white font-bold text-4xl">Welcome.</h1>
        <p className="font-semibold text-2xl text-white pt-2">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="relative mt-10">
          <form action="" className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border w-full p-3 rounded-full border-gray-300 focus:outline-none focus:border-gray-300"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <input
              type="submit"
              placeholder="Search"
              className="absolute right-0 ml-2 border-2 border-blue-400 bg-blue-400 text-white font-semibold md:w-28 w-20 h-full p-3 hover:text-black text-sm rounded-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
