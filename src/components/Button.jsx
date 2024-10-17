import { useState } from "react";
export default function Button({
  PageName,
  Button1,
  Button2,
  ButtonProperties,
  ButtonColor,
  ButtonColor1,
  PageNameStyle,
  selection,
  onButtonClick,
}) {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = (type) => {
    onButtonClick(selection === type ? null : type);
    setShowDropDown(false);
  };


  return (
    <div>
      <div className="flex mx-10 my-5">
        <h1 className={PageNameStyle}>{PageName}</h1>
        <div className="pl-5  items-center hidden sm:block">
          <div className={ButtonProperties}>
            {/* "flex gap-1 border border-black rounded-full font-medium" */}
            <button
              className={`rounded-full min-w-24 p-1 ${
                selection === "day" ? ButtonColor : ButtonColor1
              }`}
              // "bg-black text-green-400"
              // "bg-white text-black"

              onClick={() => handleClick("day")}
            >
              {Button1}
            </button>
            <button
              className={`rounded-full min-w-24 p-1 ${
                selection === "week" ? ButtonColor : ButtonColor1
              }`}
              // "bg-black text-green-400"
              //  "bg-white text-black"
              onClick={() => handleClick("week")}
            >
              {Button2}
            </button>
          </div>
        </div>

        <div className="relative sm:hidden block font-medium">
          <button
            className={`flex justify-between items-center gap-3 min-w-32 bg-gray-800  text-green-300 rounded-full px-5 py-1 ml-5 active:border-blue-600
   ${selection === "day" ? "" : ""}`}
            onClick={() => {
              setShowDropDown(!showDropDown);
            }}
          >
            {selection === "day" ? "Today" : "This Week"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5  sm:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {showDropDown && (
            <div className="absolute top-0 start-0 end-0 border-2 border-gray-800 bg-green-300 rounded-xl min-w-32 flex flex-col z-30">
              <button
                className={`flex justify-between items-center rounded-md px-5 py-1 text-left ${
                  selection === "day"
                    ? "bg-gray-800 text-green-300"
                    : "text-gray-800"
                }`}
                onClick={() => handleClick("day")}
              >
                Today
                {selection === "day" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5  sm:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </button>
              <button
                className={`flex items-center justify-between rounded-md px-5 py-1 text-left ${
                  selection === "week"
                    ? "bg-gray-800 text-green-300"
                    : "text-gray-800"
                }`}
                onClick={() => handleClick("week")}
              >
                This week
                {selection === "week" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5  sm:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
