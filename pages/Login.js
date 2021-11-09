import tw from "tailwind-styled-components";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <>
      <Wrapper>
        <UberLogoContainer>
          <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
        </UberLogoContainer>
        <Title>Log in to access your account</Title>

        <HeroImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />

        <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = tw.div`
  p-4  bg-gray-200 h-screen
`;

const UberLogoContainer = tw.div``;
const UberLogo = tw.img`
  h-20
`;
const Title = tw.div`
  text-5xl text-gray-500 text-center mt-4 border py-2
`;

const HeroImage = tw.img`
  object-contain w-full
`;

const SignInButton = tw.div`
  bg-black text-white text-center py-2 mt-8 rounded-sm cursor-pointer
`;
