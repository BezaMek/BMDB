
import { useState} from "react";
export default function MovieMain({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openTrailer, setIsOpenTrailer] = useState(false);

  const playTrailer = () => {
    setIsOpenTrailer(true);
  };
  const closeTrailer = () => {
    setIsOpenTrailer(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {movie ? (
        <div className="bg-gray-500 h-auto md:p-10 md:flex">
          <div
            className="relative  sm:w-full md:max-w-96 w-full h-full  rounded-xl sm:hover:contrast-50 transition duration-300"
            onClick={openModal}
          >
            <img
              src={
                "https://media.themoviedb.org/t/p/w300_and_h450_face/" +
                movie.poster_path
              }
              alt=""
              className="object-fill w-full h-full rounded-xl "
            />
            <div className="absolute inset-0 hidden sm:flex items-center justify-center text-white text-lg opacity-0 hover:opacity-100">
              <span>Expand</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </div>
          </div>
          <div className="ml-10 mt-10 mb-10">
            <div className="flex space-x-3">
              <h1 className="text-3xl font-bold text-white">
                {movie.original_title}
              </h1>
              <span className="text-gray-400 text-3xl">
                {movie.release_date
                  ? `(${movie.release_date.slice(0, 4)})`
                  : null}
              </span>
            </div>
            <div className="flex mt-2">
              <div className="border border-white w-8 h-8 items-center justify-center flex">
                <span className="text-white text-sm">R</span>
              </div>
              <span className="text-white pl-2">
                {movie.genres.map((genres) => genres.name).join(", ")}
              </span>
            </div>
            <div className="flex items-center space-x-5 mt-5">
              {" "}
              <div className="rounded-full w-20 h-20 bg-green-500  text-center pt-6 shadow-lg hover:scale-125">
                <span className="text-2xl font-bold text-white">
                  {movie.popularity
                    ? `${Math.round(movie.vote_average * 10)}%`
                    : null}
                </span>
              </div>
              <span className="text-white font-semibold pt-8 text-lg">
                Users <br />
                Score
              </span>
              <button className="border border-blue-950 bg-blue-950 text-white w-ful h-10 mt-8 hover:scale-125 pl-4 pr-4 rounded-full">
                what's your vibe
              </button>
            </div>
            <div className="flex space-x-5 mt-10">
              <div className="relative group bg-blue-950 border border-blue-950 w-10 h-10 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  class="size-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 3.75A.75.75 0 0 1 2.75 3h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.166a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="absolute top-10 border-blue-950 min-w-24 text-center bg-blue-950 opacity-0 group-hover:opacity-100">
                  <span className="text-sm text-white">Add to list</span>
                </div>
              </div>
              <div className="relative group bg-blue-950 border border-blue-950 w-10 h-10 flex justify-center items-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-4">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

                <div className="absolute top-10 border-blue-950 min-w-32 text-center bg-blue-950 opacity-0 group-hover:opacity-100">
                  <span className="text-sm text-white">Mark as favorite</span>
                </div>
              </div>
              <div className="relative group bg-blue-950 border border-blue-950 w-10 h-10 flex justify-center items-center rounded-full z-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-4">
  <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
</svg>

                <div className="absolute top-10 border-blue-950 min-w-40 text-center bg-blue-950 opacity-0 group-hover:opacity-100">
                  <span className="text-sm text-white">Add to your watchlist</span>
                </div>
              </div>
              <div
                className="flex space-x-2 items-center justify-center hover:text-gray-400"
                onClick={playTrailer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  className="size-5"
                >
                  <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                </svg>
                <span className="text-white hover:text-gray-400">
                  Play Trailer
                </span>
              </div>

              {openTrailer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
                    <div className="relative">
                      <button
                        onClick={closeTrailer}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      >
                        &times;
                      </button>

                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
               {isModalOpen && (
        <div className="fixed hidden md:flex inset-0 bg-black bg-opacity-50 items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
            <div className="flex">
              <img src={ "https://media.themoviedb.org/t/p/w600_and_h900_face/" +
                movie.poster_path} alt="" className="object-fit w-1/2" />
              <div>
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute left-56 text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
                <div className="my-16">
                  <div className="flex space-x-44">
                    {" "}
                    <span className="pl-5">info</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="mt-2 border-b-2 w-96 bg-red-800"></div>
                  <div className="pl-5 text-sm space-y-5">
                    <span>Primary? </span>
                    <div className="flex flex-col">
                      <span>Added by</span>
                      <span className="font-medium">vgfu34</span>
                    </div>
                    <div className="flex flex-col">
                      <span>Size</span>
                      <span className="font-medium">2000x2000</span>
                    </div>
                    <div className="flex flex-col">
                      <span>Language</span>
                      <div className="flex space-x-20 pl-4 text-sm text-gray-500 border border-slate-200 bg-slate-200 w-1/2 p-1 rounded-sm">
                        <span>English</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex space-x-28">
                      <span>Tagged People</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                      </svg>
                    </div>

                    <div className="mt-2 p-auto border-b-2 w-96 bg-red-800"></div>
                    <span className="">No records have been added.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
            </div>
            <h2 className="text-white text-xl text-semibold mt-5">Overview</h2>
            <p className="mr-16 mt-5 text-white text-sm">{movie.overview}</p>
            <div>
              <div className="mt-10 text-sm">
                <span className="text-white">Kelly Blatz</span>
                <br />
                <span className="text-white"> Director, Writer</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}

     
    </div>
  );
}
