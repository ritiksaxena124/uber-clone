import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <>
      {/* Image */}
      <Wrapper>
        <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
        {/* Profile */}
        <Profile>
          <Name>Ritik Saxena</Name>
          <UserImg src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" />
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
    h-12 rounded-full border border-gray-200 p-px
`;
