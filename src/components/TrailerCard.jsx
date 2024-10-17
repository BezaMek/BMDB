// import { useState } from "react"
// import MovieDb from"../assetes/Movie_DB.jpg"
// import TrailerPopup from "./TrailerPopup"
// import { Link } from "react-router-dom"
// export default function TrailerCard({Img,MovieTitle, Season}) {
//   const[isModalOpen, setIsModalOpen] = useState(false)
//   const openModal = ()=>{
//     setIsModalOpen(true);
//   }
//   const closeModal = ()=>{
//     setIsModalOpen(false);
//   }

//   const Video = [
//     {
//        trailer: "tgbNymZ7vqY"
//     },
//     {
//       trailer: "tgbNymZ7vqY"
//     },
//   ]
//   return (
//     <div onClick={openModal}>

// {isModalOpen && (

//     {Video.map((videop, index) => (
//       <div key={index} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
//           <div className="relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               &times;
//             </button>
//             <iframe
//               width="100%"
//               height="315"
//               src={`https://www.youtube.com/embed/${videop.trailer}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     ))}

//       <div className="flex relative ml-10 mt-5"
//  >
//       <div className="flex flex-col ">
//   <div className="flex items-center justify-center hover:scale-110 hover:rounded-lg">
//         {" "}
//         <div className=" w-72 h-44 flex border border-red-800  rounded-lg shadow-lg ">
//           <div className="w-full h-full">
//             <img src={Img} alt="" className="object-cover w-full h-full rounded-lg" />
//           </div>
//         </div>
//         <div className="absolute">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="black"
//             className="size-20"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
//               clip-rule="evenodd"
//             />
//           </svg>
//         </div>

//       </div>
//       <div className="text-center p-5">
//             <p className="font-semibold text-white text-xl">{MovieTitle}</p>
//             <span className="text-white">{Season}</span>
//         </div>
//       </div>

//     </div>
//     </div>

//   );
// }
import { useState } from "react";

export default function TrailerCard({ Img, MovieTitle, Season, videoID }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <div onClick={openModal} className="flex relative ml-10 mt-5">
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

      {isModalOpen && (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
               
                  <iframe
                  
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoID}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
            
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
