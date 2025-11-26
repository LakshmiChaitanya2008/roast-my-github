import React from "react";

export default function Header() {
  return (
    <>
      <h1 className="bg-black w-fit py-4 px-10 text-4xl text-center flex items-center gap-2.5">
        Roast My Github
        <img src="fire.png" className="inline w-10 mb-1" alt="🔥" />
      </h1>
      <p className="my-4 text-lg">
        Pulls your repos and profile info then Gemini roasts your coding life!
      </p>
    </>
  );
}
