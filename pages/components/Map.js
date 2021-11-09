import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3JleCIsImEiOiJja3ZvM25yd3UweGxyMnJxZmg0bXBhN3p3In0.DOsM9H-r4ypZM1jygibmlA";

const Map = ({pickupCoordinates, dropoffCoordinates}) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [79.4304, 28.367],
      zoom: 3,
    });
    if(pickupCoordinates)
    {
      AddMarker(map, pickupCoordinates);
    }
    if(dropoffCoordinates)
    {
      AddMarker(map, dropoffCoordinates)
    }

    if(pickupCoordinates && dropoffCoordinates)
    {
      map.fitBounds([
        dropoffCoordinates,
        pickupCoordinates
      ],{
        padding:60
      })
    }

  }, [pickupCoordinates, dropoffCoordinates]);

  const AddMarker = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat([coordinates[0], coordinates[1]]).addTo(map);
  };

  return (
    <>
      <Wrapper id="map"></Wrapper>
    </>
  );
};

export default Map;

const Wrapper = tw.div`
    flex-1 h-1/2
`;
