import FastFur from "../assetes/imgg.webp";
export default function PageResult({
  MovieName,
  NativeNamw,
  Date,
  Paragraph,
  IMG,
 
}) {
  return (
    <div className="flex border border-gray-300 bg-[#fff] min-w-32  mr-10  rounded-md shadow-md sm:truncate">
      <div className="min-w-[94px] w-[94px] h-[145px] hover:cursor-pointer">
        <img src={IMG} alt="" className="object-fit h-full rounded-s-md" />
      </div>
      <div className="p-5 overflow-hidden">
        <div className="flex hover:cursor-pointer">
          <h1 className="font-semibold hover:text-slate-500 text-ellipsis whitespace-pre-line line-clamp-1">{MovieName} <span className="text-gray-400 pl-1">({NativeNamw})</span></h1>
          
        </div>
        <span className="text-gray-400">{Date}</span>

        <p className="pt-4 text-sm text-ellipsis whitespace-pre-line line-clamp-2 overflow-hidden">
          {Paragraph}
        </p>
      </div>
    </div>
  );
}
