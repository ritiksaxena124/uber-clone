import { signOut } from "@firebase/auth";
import tw from "tailwind-styled-components";
import { auth } from "../../firebase";
const Header = ({user}) => {
  return (
    <>
      {/* Image */}
      <Wrapper>
        <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
        {/* Profile */}
        <Profile>
          <Name>{user && user.name}</Name>
          <UserImg src={user && user.photo} onClick= {() => signOut(auth)} />
        </Profile>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = tw.div`
    flex justify-between items-center
`

const Profile = tw.div`
    flex items-center
`;

const UberLogo = tw.img`
    h-20
`;

const Name = tw.div`
    mr-2 w-30 text-sm
`;
const UserImg = tw.img`
    h-12 rounded-full border border-gray-200 p-px cursor-pointer
`;
