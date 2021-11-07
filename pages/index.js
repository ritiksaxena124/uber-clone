import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Header from "./components/Header";
import ActionButtons from "./components/ActionButtons";
import InputButton from "./components/InputButton";
export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header />
        {/* Action Buttons */}
        <ActionButtons/>
        {/* Input Button */}
        <InputButton/>
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
