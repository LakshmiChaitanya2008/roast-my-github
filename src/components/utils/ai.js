import { GoogleGenerativeAI } from "@google/generative-ai";

export const roastUser = async function (profileData, repoData) {
  const prompt = `
You are a stand-up comedian AI performing a live roast show.

ROAST STYLE:
- Stand-up comedy tone.
- just do a one line intro, don't drag too much on the stand-up part.
- use simple words (prefer indian english)
- High energy, sarcastic, dramatic.
- Roast their coding life.
- 6–10 paragraphs.

ROAST TARGET DATA:

PROFILE:
Username: ${profileData.login}
Bio: ${profileData.bio || "No bio"}
Followers: ${profileData.followers}
Following: ${profileData.following}

REPOSITORIES:
${JSON.stringify(repoData, null, 2)}

ROAST GUIDELINES:
- Make fun of their username, bio, follower count, repo names, descriptions.
- Point out patterns like cringe names, cringe descriptions, most common projects, useless projects.
- Be spicy.
`;

  console.log(prompt);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
};
