import icon_search from "../assets/images/icon-search.svg";
import { useState } from "react";
import { useDictionaryStore } from "../store/dictionaryStore";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const theme = useDictionaryStore((state) => state.theme);

  return (
    <form
      className="relative w-full mb-[24px]"
      onSubmit={(e) => {
        e.preventDefault();
        alert(inputValue);
      }}
    >
      <input
        type="text"
        placeholder="Search for any word..."
        className="focus-visible:outline-0 w-full h-[48px] rounded-[16px] border-[1px] border-solid flex justify-start items-center pl-[24px] pr-[24px] text-[]16px"
        value={inputValue}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        style={{
          color: theme[theme.active].secondary,
          backgroundColor: theme[theme.active].background_alt,
          borderColor: theme[theme.active].background_alt,
        }}
      />
      <div className="absolute h-full top-[0] right-[0] flex justify-end items-center pr-[24px]">
        <img
          src={icon_search}
          alt="search image"
          className="w-[15.5px] h-[15.5px]"
        />
      </div>
    </form>
  );
};

export default Input;
