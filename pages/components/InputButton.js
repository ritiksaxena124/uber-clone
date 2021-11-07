import tw from "tailwind-styled-components";

const InputButton = () => {
  return (
    <>
      <InputBtn id="input" type="text" placeholder="Where to?" />
    </>
  );
};
export default InputButton;

const InputBtn = tw.input`
    bg-gray-200 mt-8 flex items-center h-15 p-4 rounded-lg text-2xl w-full outline-none
`;
