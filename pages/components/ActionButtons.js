import tw from "tailwind-styled-components";
import Link from 'next/link'

const ActionButtons = () => {
  return (
    <>
      <Wrapper>
        <Link href="/search">
        <ActionButton >
          <ActionButtonImage src="./Car.png" />
          Ride
        </ActionButton>
        </Link>
        <ActionButton>
          <ActionButtonImage src="./Car.png" />
          Wheels
        </ActionButton>
        <ActionButton>
          <ActionButtonImage src="./Car.png" />
          Reserve
        </ActionButton>
      </Wrapper>
    </>
  );
};

export default ActionButtons;

const Wrapper = tw.div`
    flex justify-center
`;

const ActionButton = tw.div`
    bg-gray-200  flex-1 h-32 m-3 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`;

const ActionButtonImage = tw.img`
    h-3/5
`;
