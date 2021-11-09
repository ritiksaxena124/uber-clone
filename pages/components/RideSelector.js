import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "./CarList";
const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

  const [rideDuration, setRideDuration] = useState(0);

  useEffect(()=>{
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiY3JleCIsImEiOiJja3ZvM25yd3UweGxyMnJxZmg0bXBhN3p3In0.DOsM9H-r4ypZM1jygibmlA`)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      setRideDuration((data.routes[0].distance / 100).toPrecision(2))
    })
  })

  return (
    <>
      <Wrapper>
        <CarList>
          {carList.map((cars) => {
            return (
              <>
                <Car>
                  <CarDetails>
                    <CarImage src={cars.imgUrl} />
                    <CarNameandDistance>
                      <CarName>{cars.service}</CarName>
                      <Distance>{`${cars.multiplier * 5} min away`}</Distance>
                    </CarNameandDistance>
                  </CarDetails>
                  <Price>Rs. {cars.multiplier * rideDuration}</Price>
                </Car>
              </>
            );
          })}
        </CarList>
      </Wrapper>
    </>
  );
};

export default RideSelector;

const Wrapper = tw.div``;
const CarList = tw.div``;

const Car = tw.div`
    flex items-center p-3  justify-between hover:bg-gray-100 cursor-pointer
`;
const CarImage = tw.img`
    h-12 mr-3
`;
const CarDetails = tw.div`
    flex
`;
const CarNameandDistance = tw.div``;
const CarName = tw.div`
    font-medium
`;
const Distance = tw.div`
    text-xs text-blue-500
`;
const Price = tw.div``;
