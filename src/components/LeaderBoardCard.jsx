export default function BordCard({ Img, BordName, NumberOne, NumberTwo }) {
  return (
    <div className="">
      <div className="flex items-center">
      <div className="border border-slate-500 w-16 h-16 rounded-full">
     
  <img
    src={Img}
    alt=""
    className="w-full h-full object-cover rounded-full"
  />
   </div>
  <div>
    <h2 className="pl-5 font-semibold text-base">{BordName}</h2>
    <div className="space-y-1">
      <div className="flex pl-2">
        <div className="border border-green-200 bg-green-200 sm:px-44 px-10 py-0 rounded-full"></div>
        <h2>{NumberOne}</h2>
      </div>
      <div className="flex pl-2">
        <div className="border border-yellow-300 bg-yellow-300  sm:px-52 px-24  py-0 rounded-full"></div>
        <h2>{NumberTwo}</h2>
      </div></div>
 
  </div>
 

      </div>

    </div>
  );
}
