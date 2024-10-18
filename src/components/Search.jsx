import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [isSearch, setIsSearch] = useState(false);
  const [sugggestion, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const searchHandel = () => {
    setIsSearch(!isSearch);
  };
  const fetchSuggestions = async (query) => {
    // setIsSearch(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/keyword?query=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error:${response.status}`);
      }
      const data = await response.json();
      setSuggestions(data.results || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      //   setIsSearch(false);
    }
  };
  const handelChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    fetchSuggestions(userInput);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    if (inputValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(inputValue)}`);
    }
  };
  return (
    <div>
      {isSearch ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          class="size-6"
          onClick={searchHandel}
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="size-6"
            onClick={searchHandel}
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      )}
      {isSearch ? (
        <div className="absolute right-0 top-16 border border-white shadow-lg w-full bg-white">
          <div className="relative group w-full z-50">
            <form
              action=""
              className="w-full flex items-center pl-5"
              onSubmit={handelSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                class="size-4"
                onClick={searchHandel}
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="w-full pl-3 py-1 text-gray-500 italic outline-none focus:outline-none focus:border-transparent"
                value={inputValue}
                onChange={handelChange}
              />
            </form>
            {sugggestion.length > 0 && (
              <ul className="absolute left-0 top-5 w-full bg-white mt-2 max-h-48 z-50">
                {sugggestion.slice(0, 13).map((suggestion, index) => (
                  <div>
                    <li
                      key={index}
                      className="flex space-x-3 px-4 text-medium text-black font-normal hover:bg-gray-200 border border-b-1 border-gray-200 bg-white cursor-pointer"
                      onClick={() => {
                        setInputValue(suggestion.name);
                        navigate(
                          `/search?q=${encodeURIComponent(suggestion.name)}`
                        );
                      }}
                    >
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          class="size-4"
                          onClick={searchHandel}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>{suggestion.name}</div>
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
