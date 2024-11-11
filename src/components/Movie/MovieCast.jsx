import Card from "../Card.jsx";
import { Link } from "react-router-dom";
export default function MovieCast({ movie}) {

  //     Imgs: Dylan,
  //     ActorName: "Dylan O'Brien",
  //     ShotenName: "Dylan",
  //   },
  //   {
  //     Imgs: Dylan,
  //     ActorName: "Dylan O'Brien",
  //     ShotenName: "Dylan",
  //   },
  //   {
  //     Imgs: Dylan,
  //     ActorName: "Dylan O'Brien",
  //     ShotenName: "Dylan",
  //   },
  //   {
  //     Imgs: Dylan,
  //     ActorName: "Dylan O'Brien",
  //     ShotenName: "Dylan",
  //   },
  //   {
  //     Imgs: Dylan,
  //     ActorName: "Dylan O'Brien",
  //     ShotenName: "Dylan",
  //   },
  //   {
  //     Imgs: Dylan,
  //     ActorName: "Dylan O'Brien",
  //     ShotenName: "Dylan",
  //   },
  // ];

  return (
    <div>
      <h2 className="text-xl font-semibold pl-10 mt-5">Top Billed Cast</h2>
      <div className="flex items-center relative"> 
      
        <div className="flex overflow-x-scroll overflow-y-hidden">
     
        {movie ? (
  <>
    {movie.credits.cast.slice(0, 9).map((cast, index) => (
      <Card
        key={index}
        Imgs={
          cast.profile_path
            ? "https://media.themoviedb.org/t/p/w220_and_h330_face/" +
              cast.profile_path
            : null
        }
        ActorName={cast.name}
        ShotenName={cast.original_name}
      />
    ))}

    {movie.credits.cast.length > 9 && (
      <div className="min-w-52 mb-5 border border-[#fff] bg-[#fff]">
        <Link to="/search" className="flex justify-center items-center my-24 hover:text-slate-400">
        <span className="font-semibold">View More</span>  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

        </Link>
      </div>
    )}
  </>
) : (
  <div></div>
)}


        </div>
       
      </div>
    </div>
  );
}
