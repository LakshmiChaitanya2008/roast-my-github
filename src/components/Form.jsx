import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function Form() {
  const { setProfileData } = useContext(ProfileContext);
  const handleSubmit = async function (formdata) {
    const { username } = Object.fromEntries(formdata);

    const req = await fetch(`https://api.github.com/users/${username}`);
    const data = await req.json();
    if (data.status !== "404") {
      setProfileData(data);
    } else {
      setProfileData("Not Found");
    }
  };
  return (
    <form className="relative" action={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your GitHub Username..."
        name="username"
        autoComplete="off"
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
  );
}
