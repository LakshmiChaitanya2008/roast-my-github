import { createContext, useContext, useState } from "react";

export const ProfileContext = createContext(null);

export default function ProfileContextProvider({ children }) {
  const [profileData, setProfileData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  return (
    <ProfileContext.Provider
      value={{ profileData, setProfileData, repoData, setRepoData }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
