import { GoogleGenerativeAI } from "@google/generative-ai";

export const roastUser = async function (profileData, repoData) {
  //   const prompt = `
  // You are a ruthless stand-up comedian.
  // Go extremely specific: mock their repo names, typos, cringe descriptions, inconsistent patterns, meaningless repo names, etc.
  // - Act as a savage roast comedian with a talent for cutting sarcasm. Your target? A so-called developer who thinks they are a code wizard but has a GitHub profile full of questionable experiments.
  // - just do a one line intro, don't drag too much on the stand-up part.
  // - use simple words
  // - Strong punchlines.
  // - Ignore the repos with no description
  // - Roast them without mercy. Tear apart their naming choices, mock their desperate attempts at coding, and question their so-called 'technical prowess'. Mention how their repo names sound like someone spilled a Scrabble bag while trying to code, and their descriptions are like self-destruct buttons for anyone who dares to read them.
  // - Use metaphors, exaggeration, and dramatic insults.
  // - Don't just roast them—obliterate their confidence. Make them feel like they should attach a 'Work in Progress' sign to their entire career. And don't forget to add some clever, fake but hilariously bad GitHub repo names they could create next
  // - Use harsh insults
  // - 4 paragraphs

  // ROAST TARGET DATA:

  // PROFILE:
  // Username: ${profileData.login}
  // Bio: ${profileData.bio || "No bio"}
  // Followers: ${profileData.followers}
  // Following: ${profileData.following}

  // REPOSITORIES:
  // ${JSON.stringify(repoData, null, 2)}

  // ROAST GUIDELINES:
  // - Make fun of their username, bio, follower count, repo names, descriptions.
  // - Point out patterns like cringe names, cringe descriptions, most common projects, useless projects.
  // - Be spicy.
  // `;

  // console.log(prompt);

  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/roast`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ profileData, repoData }),
  });

  console.log(res);
  if (res.status !== 500) {
    const data = await res.json();
    console.log(data);

    return data.roast;
  } else {
    return "Gemini Server Overloaded! Please Try Again later.";
  }
};
