import { createContext, useContext, useState } from "react";

export const ProfileContext = createContext(null);

export default function ProfileContextProvider({ children }) {
  const [profileData, setProfileData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [roastText, setRoastText] = useState("");
  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData,
        repoData,
        setRepoData,
        roastText,
        setRoastText,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
