import React from "react";

export default function App() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="bg-black w-fit py-4 px-10 text-4xl text-center flex items-center gap-2.5">
        Roast My Github
        <img src="fire.png" className="inline w-10 mb-1" alt="🔥" />
      </h1>
      <p className="my-4 text-lg">
        Pulls your repos and profile info then Gemini roasts your coding life!
      </p>
      <form className="relative">
        <input
          type="text"
          placeholder="Enter your GitHub Username..."
          className="bg-white min-w-xl text-xl py-3 text-black px-4 pr-16 font-bold border-4 rounded-4xl border-black focus:outline-none"
        />

        <button
          type="submit"
          className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-black border-4 border-black rounded-full p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </button>
      </form>
      <div className="mt-10 text-black w-[700px] max-w-full bg-white border-4 border-black rounded-2xl p-6 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)] flex gap-6 items-start">
        <div className="h-full">
          <img
            src="https://avatars.githubusercontent.com/u/72391391?v=4"
            alt="profile"
            className="w-20 h-20 rounded-xl border border-black object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-extrabold">LakshmiChaitanya2008</h2>

          <p className="text-base -mt-1">
            <span className="font-semibold">Bio:</span> Jack of all trades.
          </p>

          <div className="flex gap-6 text-base font-semibold -mt-1">
            <p>
              Followers:
              <span className="font-bold"> 10</span>
            </p>
            <p>
              Following: <span className="font-bold"> 22</span>
            </p>
            <p>
              Repos: <span className="font-bold"> 23</span>
            </p>
          </div>

          <p className="text-sm -mt-1 text-gray-700">Location: India</p>
        </div>
      </div>

      <div className="flex gap-5">
        <button className="bg-black px-6 py-3 font-bold mt-4 cursor-pointer rounded-lg">
          Confirm?
        </button>
        <button className="bg-black  px-6 py-3 mt-4 font-bold cursor-pointer rounded-lg">
          Cancel
        </button>
      </div>
      {/* <div className="mt-10 w-[700px] max-w-full bg-white text-black border-4 border-black rounded-2xl p-6 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)]">
        <p className="text-base leading-relaxed">
          Bro, your GitHub looks like a museum of abandoned side projects.
          You’ve got 27 repos, and 19 of them haven’t been touched since India’s
          demonetization. Your commit history is so empty, even VS Code’s
          autosave does more work than you. Your README game is so weak even
          ChatGPT refused to generate badges for you. Gemini took one look at
          your code and asked if this was a cry for help.
        </p>
      </div> */}
    </div>
  );
}
