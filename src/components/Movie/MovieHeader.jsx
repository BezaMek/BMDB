import { useState} from "react";
export default function MovieHeader() {
  const [isUderlined, setIsUnderline] = useState(false);
 
 
  const handelClick = () => {
    setIsUnderline(!isUderlined);
  };
 
  return (
    <div className="z-50">
      <div className="border border-pink-950 bg-[#fff] h-10 w-screen sm:w-full flex justify-center items-center space-x-5 z-50">
        <div className="relative group">
          <div className="flex items-center gap-2">
            <span className="underline decoration-sky-500 decoration-4">
              Overview
            </span>
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
          <div className="absolute flex flex-col border border-[#fff] bg-[#fff] w-52 h-auto text-left space-y-1 rounded-sm shadow-md opacity-0 group-hover:opacity-100 z-50">
            <span className="px-1 py-1 hover:bg-slate-300">Main</span>
            <span className="px-1 py-1 hover:bg-slate-300">
              Alterative Titles
            </span>
            <span className="px-1 py-1 hover:bg-slate-300">crew and cast</span>
            <span className="px-1 py-1 hover:bg-slate-300">Episode Groups</span>
            <span className="px-1 py-1 hover:bg-slate-300">Seasons</span>
            <span className="px-1 py-1 hover:bg-slate-300">Translation</span>
            <div className="pt-2 flex flex-col space-y-1">
              <span className="px-1 py-1 hover:bg-slate-300">Changes</span>
              <span className="px-1 py-1 hover:bg-slate-300">Reports</span>
              <span className="px-1 py-1 hover:bg-slate-300">Edit</span>
            </div>
          </div>
        </div>

        <div className="sm:relative group">
          <div
            className={` flex items-center gap-2 ${
              isUderlined ? "underline decoration-gray-400 decoration-4" : ""
            }`}
            onClick={handelClick}
          >
            <span className="">Media</span>
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
          <div className="absolute flex flex-col border border-[#fff] bg-[#fff] w-40 h-auto text-left space-y-1 rounded-sm shadow-md opacity-0 group-hover:opacity-100 z-50">
            <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
              <span className="">Backdrops</span>
              <span>35</span>
            </div>
            <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
              <span className="">Alterative Titles</span>
              <span>35</span>
            </div>
            <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
              <span className="">crew and cast</span>
              <span>35</span>
            </div>

            <div className="">
              <div className="relative group flex space-x-6 px-1 py-1 hover:bg-slate-300 cursor-pointer">
                <span className="">Episod Groups</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="size-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="absolute hidden group-hover:flex md:left-40 right-20 top-2 flex-col border border-pink-950 bg-[#fff] w-32 h-auto text-left space-y-1 rounded-sm shadow-md">
                  <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                    <span className="">hhhhhh</span>
                    <span>35</span>
                  </div>

                  <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                    <span className="">hhhhhh</span>
                    <span>35</span>
                  </div>
                  <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                    <span className="">hhhhhh</span>
                    <span>35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div
            className={`flex items-center gap-2 ${
              isUderlined ? "underline decoration-gray-400 decoration-4" : ""
            } `}   onClick={handelClick}
          >
            {" "}
            <span>Fandom</span>
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

          <div className="absolute top-6 right-1  md:left-2 flex flex-col border border-[#fff] bg-[#fff] w-40 h-auto text-left space-y-1 rounded-sm shadow-md opacity-0 group-hover:opacity-100 z-50">
            <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
              <span className="">Backdrops</span>
              <span>35</span>
            </div>
            <div className="relative group space-x-6 px-1 py-1 hover:bg-slate-300">
              <span className="">Alterative Titles</span>
              <span>35</span>
              <div className="absolute md:left-36 right-40  flex-col border border-[#fff] bg-[#fff] w-32 h-auto text-left space-y-1 rounded-sm shadow-md opacity-0 group-hover:opacity-100">
                <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                  <span className="">hhhhhh</span>
                  <span>35</span>
                </div>
                <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                  <span className="">hhhhhh</span>
                  <span>35</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className=" ">
            <div
              className={`flex items-center gap-2 ${
                isUderlined ? "underline decoration-gray-400 decoration-4" : ""
              }`}   onClick={handelClick}
            >
              {" "}
              <span>Share</span>
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

            <div className="absolute top-6 right-0 md:left-1 flex flex-col border border-[#fff] bg-[#fff] w-40 h-auto text-left space-y-1 rounded-sm shadow-md opacity-0 group-hover:opacity-100 z-50">
              <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                <span className="">Backdrops</span>
                <span>35</span>
              </div>
              <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                <span className="">Alterative Titles</span>
                <span>35</span>
              </div>
              <div className="space-x-6 px-1 py-1 hover:bg-slate-300">
                <span className="">crew and cast</span>
                <span>35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
