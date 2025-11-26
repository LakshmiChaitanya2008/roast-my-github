import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { roastUser } from "./utils/ai";

export default function ProfileCard() {
  const {
    profileData,
    setProfileData,
    setRepoData,
    repoData,
    setRoastText,
    loading,
    setLoading,
    roastText,
  } = useContext(ProfileContext);

  const handleConfirm = async function (e) {
    if (profileData.login) {
      setLoading(true);
      try {
        const req = await fetch(
          `https://api.github.com/users/${profileData.login}/repos`
        );

        const data = await req.json();
        const reducedRepos = data.map((r) => ({
          name: r.name,
          description: r.description || "No description provided",
          language: r.language,
        }));
        setRepoData(reducedRepos);

        const roastText = await roastUser(profileData, reducedRepos);

        setRoastText(roastText);
      } finally {
        setLoading(false);
      }
    }
  };
  if (profileData === "Not Found") {
    return (
      <div className="mt-10 text-black w-[700px] max-w-full bg-white border-4 border-black rounded-2xl p-6 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-extrabold text-red-600">
          User Not Found!
        </h2>
        <p className="mt-2 text-base">Please try again.</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="mt-10 text-black w-[700px] max-w-full bg-white border-4 border-black rounded-2xl p-6 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)] flex gap-6 items-stretch">
          <div className="shrink-0">
            <img
              src={profileData.avatar_url}
              alt="profile"
              className="h-full max-h-[140px] w-auto rounded-xl border-4 border-black object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-extrabold">{profileData.login}</h2>

            <p className=" -mt-1">
              <span className="font-bold">Bio:</span>{" "}
              {profileData.bio || "No bio available."}
            </p>

            <div className="flex gap-6 font-semibold -mt-1">
              <p>
                Followers:{" "}
                <span className="font-bold">{profileData.followers}</span>
              </p>
              <p>
                Following:{" "}
                <span className="font-bold">{profileData.following}</span>
              </p>
              <p>
                Repos:{" "}
                <span className="font-bold">{profileData.public_repos}</span>
              </p>
            </div>

            <p className="text-sm -mt-1 ">
              Location:{" "}
              <span className="font-bold">
                {profileData.location || "Unknown"}
              </span>
            </p>
          </div>
        </div>
        {!roastText ? (
          <div className="flex gap-5">
            <button
              onClick={handleConfirm}
              disabled={loading}
              className={`bg-black px-6 py-3 font-bold mt-4 rounded-lg cursor-pointer
    ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Roasting...
                </div>
              ) : (
                "Confirm?"
              )}
            </button>
            <button
              onClick={() => {
                setProfileData(null);
                setRepoData(null);
                setRoastText("");
              }}
              disabled={loading}
              className={`bg-black px-6 py-3 font-bold mt-4 rounded-lg cursor-pointer
    ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
