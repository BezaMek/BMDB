import Fast from "../assetes/inside_out.jpg";
import BordCard from "./LeaderBoardCard.jsx";
export default function LeaderBord() {
  return (
    <div className="mt-5 ml-10 mb-5">
      <div className=" flex space-x-5">
        <h1 className="font-bold text-xl">Leaderbord</h1>
        <div>
          <li className="marker:text-sky-400">All time Edits</li>
          <li className="marker:text-pink-400">This time Edits</li>
        </div>
      </div>
      <div className="flex space-y-3 sm:justify-between flex-wrap">
        <div>
          <BordCard
          Img={Fast}
          BordName="Abebe"
          NumberOne="122,122"
          NumberTwo="8888,77"
        />
        <BordCard
          Img={Fast}
          BordName="Abebe"
          NumberOne="122,122"
          NumberTwo="8888,77"
        />
             <BordCard
          Img={Fast}
          BordName="Abebe"
          NumberOne="122,122"
          NumberTwo="8888,77"
        /> 
        </div>
        {" "}
        <div>
                  <BordCard
          Img={Fast}
          BordName="Abebe"
          NumberOne="122,122"
          NumberTwo="8888,77"
        />
                      <BordCard
          Img={Fast}
          BordName="Abebe"
          NumberOne="122,122"
          NumberTwo="8888,77"
        />
                      <BordCard
          Img={Fast}
          BordName="Abebe"
          NumberOne="122,122"
          NumberTwo="8888,77"
        />
        </div>
       
     
      </div>
    </div>
  );
}
