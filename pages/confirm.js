import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/dist/client/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const confirm = () => {
  const router = useRouter();
  const { pickupLocation, dropOffLocation } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = () => {
    const pickup = pickupLocation;
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiY3JleCIsImEiOiJja3ZvM25yd3UweGxyMnJxZmg0bXBhN3p3In0.DOsM9H-r4ypZM1jygibmlA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = () => {
    const dropoff = dropOffLocation;
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiY3JleCIsImEiOiJja3ZvM25yd3UweGxyMnJxZmg0bXBhN3p3In0.DOsM9H-r4ypZM1jygibmlA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropOffCoordinates();
  }, [pickupLocation, dropOffLocation]);

  return (
    <>
      <Wrapper>
        <BackButtonContainer>
          <Link href="/search">
            <BackButton src="https://img.icons8.com/glyph-neue/64/000000/circled-left-2.png" />
          </Link>
        </BackButtonContainer>
        <Map
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <Title>Choose a ride, or swipe up for more</Title>
        <RideContainer>
          {/* Ride Selector */}
          <RideSelector
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
          />
        </RideContainer>
        {/* Confirm Button */}
        <ConfirmButton>Confirm UberX</ConfirmButton>
      </Wrapper>
    </>
  );
};

export default confirm;

const BackButtonContainer = tw.div`
  absolute z-10  px-2 pt-1 
`;
const BackButton = tw.img`
  h-10 cursor-pointer
`;

const Title = tw.div`
    text-xs text-center p-2 mt-2
`;
const Wrapper = tw.div`
    h-screen flex flex-col relative
`;
const RideContainer = tw.div`
    flex-1 p-3 h-1/2 overflow-y-scroll
`;

const ConfirmButton = tw.div`
  m-3  bg-black text-white text-center p-2 cursor-pointer rounded-sm
`;
