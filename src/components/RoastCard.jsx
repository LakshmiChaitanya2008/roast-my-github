import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import ReactMarkdown from "react-markdown";
export default function RoastCard() {
  const { roastText } = useContext(ProfileContext);
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    if (!roastText) return;
    console.log(roastText);

    const chars = Array.from(roastText);
    let i = 0;
    setAnimatedText("");

    const interval = setInterval(() => {
      if (i >= chars.length) {
        clearInterval(interval);
        return;
      }

      setAnimatedText((prev) => prev + (chars[i] ?? ""));
      i++;
    }, 15);

    return () => clearInterval(interval);
  }, [roastText]);

  return (
    <>
      <h2 className="text-2xl mt-10 font-bold text-white flex items-center gap-3">
        Welcome to the AI Roast Show!
        <img src="mic.png" className="inline w-5" />
      </h2>

      <div className="mt-4 w-[700px] mb-20 max-w-full bg-white text-black border-4 border-black rounded-2xl p-6 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)]">
        <div className="text-base leading-relaxed whitespace-pre-wrap">
          <ReactMarkdown>{roastText[0] + animatedText || ""}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
