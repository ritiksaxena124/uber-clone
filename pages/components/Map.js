import {useEffect} from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken =
  "pk.eyJ1IjoiY3JleCIsImEiOiJja3ZvM25yd3UweGxyMnJxZmg0bXBhN3p3In0.DOsM9H-r4ypZM1jygibmlA";


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: "mapbox://styles/mapbox/streets-v11",
          center: [79.4304,28.3670],
          zoom: 3,
        });
    
      }, []);

    return(
        <>
        <Wrapper id="map"></Wrapper>
        </>
    )
}

export default Map;

const Wrapper = tw.div`
    flex-1
`