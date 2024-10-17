export default function Card({Imgs, ActorName, ShotenName}) {
  return (
    <div className="min-w-32 mb-5 border border-[#fff] bg-[#fff] ml-10 mt-5 space-x-5 text-left shadow-lg rounded-lg">
      <img src={Imgs} alt="" className="object-fill rounded-t-xl" />
      <div className="flex flex-col pt-2 pb-5">
        <span className="font-bold">{ActorName}</span>
        <span>{ShotenName}</span>
      </div>
    </div>
  );
}
