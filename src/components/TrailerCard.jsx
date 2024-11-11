import { useState } from "react";
import VideoModal from "./VideoModal";

export default function TrailerCard({ Img, MovieTitle, Season, videoID, selected }) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div onClick={openModal} className="flex relative ml-10 mt-5 ">
        <div className="flex flex-col">
          <div className="flex items-center justify-center hover:scale-110 hover:rounded-lg">
            <div className="w-72 h-44 flex  rounded-lg shadow-lg">
              <div className="w-full h-full">
                <img
                  src={Img}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
            <div className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="text-center p-5">
            <p className="font-semibold text-white text-xl">{MovieTitle}</p>
            <span className="text-white">{Season}</span>
          </div>
        </div>
      </div>

      {isModalOpen === true && (
     <VideoModal videoID={videoID} closeModal={closeModal} selected={selected}/>
      )}
    </div>
  );
}
