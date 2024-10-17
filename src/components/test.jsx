import React, { useState} from 'react';
 

const SearchWithAPISuggestions = ({}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
   
  
  // Function to handle input change and fetch suggestions
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Only make API call if the input length is > 2
    if (value.length > 2) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  // Function to fetch suggestions from the API
  const fetchSuggestions = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/keyword?query=${searchTerm}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
          },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuggestions(data.results || []);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-full border border-gray-300 px-3 py-2 rounded-lg"
      />
      
      {loading && <p className="absolute top-full left-0 w-full px-4 py-2 bg-white">Loading...</p>}

      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 mt-2 rounded-lg max-h-48 overflow-y-auto z-50">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setQuery(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchWithAPISuggestions;
