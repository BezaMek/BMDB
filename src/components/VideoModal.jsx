import { useState,useEffect } from "react";
export default function VideoModal({videoID, closeModal}){
    const [youtubeVideoId, setYoutubeVideoId] = useState(null);
    
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${videoID}/videos?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGFlNGM1M2JmNTM1ZjY0YzgzZGE4NWQxZDZkNSIsIm5iZiI6MTcyMTkxMTAyNi41MjQ5NTEsInN1YiI6IjY2YTI0NTZkNGM0MmU2ZWQxNzI1YWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZmeljUA_PpkWwjFzHNyIwUjxEDCLUpv2OKBSyAMsVo",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setYoutubeVideoId(data.results[0].key))
      .catch((err) => console.log(err));
  }, []);

    return(
        <div>
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              {youtubeVideoId&&(
                     <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              )}
         
            </div>
          </div>
        </div>
      </div>
    )
}