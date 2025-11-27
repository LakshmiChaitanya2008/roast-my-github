import { Hono } from "hono";
import {
  GoogleGenerativeAI,
  GoogleGenerativeAIResponseError,
} from "@google/generative-ai";
import { cors } from "hono/cors";
import { rateLimiter } from "hono-rate-limiter";
import { nanoid } from "nanoid";
const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
];

app.use("/api/*", cors());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-6",
    keyGenerator: (c) =>
      c.req.header("x-forwarded-for") || c.req.header("x-real-ip") || "unknown",
  })
);
app.get("/", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});

app.post("/api/roast", async (c) => {
  const { profileData, repoData } = await c.req.json<{
    profileData: any;
    repoData: any[];
  }>();

  const prompt = `
You are a ruthless stand-up comedian.
Go extremely specific: mock their repo names, typos, cringe descriptions, inconsistent patterns, meaningless repo names, etc.
- Act as a savage roast comedian with a talent for cutting sarcasm. Your target? A so-called developer who thinks they are a code wizard but has a GitHub profile full of questionable experiments. 
- just do a one line intro, don't drag too much on the stand-up part.
- use simple words
- Strong punchlines.
- Ignore the repos with no description
- Roast them without mercy. Tear apart their naming choices, mock their desperate attempts at coding, and question their so-called 'technical prowess'. Mention how their repo names sound like someone spilled a Scrabble bag while trying to code, and their descriptions are like self-destruct buttons for anyone who dares to read them.
- Use metaphors, exaggeration, and dramatic insults.
- Don't just roast them—obliterate their confidence. Make them feel like they should attach a 'Work in Progress' sign to their entire career. And don't forget to add some clever, fake but hilariously bad GitHub repo names they could create next
- Use harsh insults
- 4 paragraphs
- At last say coding is not for you, just do something else (make that something else relatable to their bad repo names and bad projects)

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

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    const result = await model.generateContent(prompt);

    const text = result.response.text();
    console.log(text);

    return c.json({ roast: text });
  } catch (e: any) {
    return c.json({ error: e.message }, 500);
  }
});

export default app;
