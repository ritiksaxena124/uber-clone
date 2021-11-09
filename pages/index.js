import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Header from "./components/Header";
import ActionButtons from "./components/ActionButtons";
import InputButton from "./components/InputButton";
import { useState, useEffect } from "react";
import {auth} from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photo: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/Login");
      }
    });
  }, [user]);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header user={user} />
        {/* Action Buttons */}
        <ActionButtons />
        {/* Input Button */}
        <InputButton />
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
 flex-1 p-4
`;
