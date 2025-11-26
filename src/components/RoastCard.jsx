import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import ReactMarkdown from "react-markdown";
export default function RoastCard() {
  const { roastText } = useContext(ProfileContext);
  return (
    <>
      <h2 className="text-2xl mt-10 font-bold text-white flex items-center gap-3">
        Welcome to the AI Roast Show!
        <img src="mic.png" className="inline w-5" />
      </h2>

      <div className="mt-4 w-[700px] max-w-full bg-white text-black border-4 border-black rounded-2xl p-6 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)]">
        <div className="text-base text-black prose lg:prose-xl leading-relaxed">
          <ReactMarkdown>{roastText}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
