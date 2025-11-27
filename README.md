# Roast my GitHub

It takes your username and pulls your profile info, repositories and mocks your coding life!

- Made using React.js, Tailwind CSS, Hono and Gemini AI
- You can only do 5 requests per 15min now.
- Deployed both the API and frontend on Vercel.

Live Website: https://roast-my-ghub.vercel.app

However, if you want to try locally with your API Key:
### Frontend:
```sh
npm run dev
```
### Backend:
```sh
cd hono
npm run dev
```
Environmental Variables:
- Frontend: `VITE_SERVER_URL`
- Backend: `GEMINI_API_KEY `
