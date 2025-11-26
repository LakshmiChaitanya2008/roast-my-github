import React, { useContext } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ProfileCard from "./components/ProfileCard";
import RoastCard from "./components/RoastCard";
import { ProfileContext } from "./context/ProfileContext";

export default function App() {
  const { profileData } = useContext(ProfileContext);
  return (
    <div className="flex flex-col items-center mt-10">
      <Header />
      <Form />
      {profileData ? (
        <>
          <ProfileCard />
        </>
      ) : (
        ""
      )}

      {/* <RoastCard /> */}
    </div>
  );
}
