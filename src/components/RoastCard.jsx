import React from "react";

export default function RoastCard() {
  return (
    <div className="mt-10 w-[700px] max-w-full bg-white text-black border-4 border-black rounded-2xl p-6 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)]">
      <p className="text-base leading-relaxed">
        Bro, your GitHub looks like a museum of abandoned side projects. You’ve
        got 27 repos, and 19 of them haven’t been touched since India’s
        demonetization. Your commit history is so empty, even VS Code’s autosave
        does more work than you. Your README game is so weak even ChatGPT
        refused to generate badges for you. Gemini took one look at your code
        and asked if this was a cry for help.
      </p>
    </div>
  );
}
