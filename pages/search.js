import tw from "tailwind-styled-components";
import Link from "next/link";
import { useState } from "react";
const search = () => {
  const[pickupLocation, setPickupLocation] = useState("");
  const[dropOffLocation, setDropOffLocation] = useState("");
  return (
    <>
      <Wrapper>
        {/* Button Container */}
        <ButtonContainer>
          <Link href="/">
            <BackButton src="https://img.icons8.com/ios-filled/100/000000/long-arrow-left.png" />
          </Link>
        </ButtonContainer>

        {/* Input Container */}
        <InputContainer>
          <FromToIcons>
            <Circle src="https://img.icons8.com/plumpy/100/000000/circled.png" />
            <Line src="https://img.icons8.com/material-outlined/100/000000/vertical-line.png" />
            <Square src="https://img.icons8.com/ios-filled/100/000000/rounded-rectangle.png" />
          </FromToIcons>
          <InputBoxes>
            <Input 
            placeholder="Enter Pickup Location" 
            value={pickupLocation}
            onChange={(e)=>setPickupLocation(e.target.value)}
            />
            <Input 
            placeholder="Where to?"
            value={dropOffLocation}
            onChange={(e)=> setDropOffLocation(e.target.value)}
             />
          </InputBoxes>
          <PlusIcon src="https://img.icons8.com/ios-filled/50/000000/plus.png" />
        </InputContainer>

        {/* Saved Places */}
        <SavedPlaces>
          <StartIcon src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-Star-essential-collection-bearicons-glyph-bearicons.png" />
          Saved Places
        </SavedPlaces>

        {/* Confirm Locations */}
        <Link href={{pathname:'/confirm', query:{pickupLocation:pickupLocation, dropOffLocation:dropOffLocation}}}>
        <ConfirmLocations>Confirm Locations</ConfirmLocations>
        </Link>
      </Wrapper>
    </>
  );
};

export default search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
    bg-white h-12 px-4 flex items-center
`;
const BackButton = tw.img`
    h-10 cursor-pointer
`;

const InputContainer = tw.div`
bg-white px-4 py-2 flex items-center
`;
const FromToIcons = tw.div`
    w-10 flex flex-col items-center flex-0.5
`;
const Circle = tw.img`
h-2.5
`;
const Line = tw.img`
h-10
`;
const Square = tw.img`
    h-3
`;

const InputBoxes = tw.div`
    flex flex-col flex-1 mx-2
`;
const Input = tw.input`
    h-10 bg-gray-200 my-2 p-2 rounded-lg outline-none border-none
`;
const PlusIcon = tw.img`
    rounded-full h-10 cursor-pointer
`;

const SavedPlaces = tw.div`
    mt-2 flex items-center px-4 py-2 bg-white
`;
const StartIcon = tw.img`
 h-10 mr-2 cursor-pointer
`;
const ConfirmLocations = tw.div`
    mx-4 my-3 bg-black text-white px-4 py-2 text-center rounded-lg cursor-pointer
`;
