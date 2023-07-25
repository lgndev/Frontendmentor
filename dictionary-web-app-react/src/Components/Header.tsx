import logo from "../assets/images/logo.svg";
import moon_light from "../assets/images/icon-moon-light.svg";
import moon_dark from "../assets/images/icon-moon-dark.svg";
import icon_arrow_down from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const Header = () => {
  const [selectedFont, setSelectedFont] = useState("sansSerif");
  // - true = light
  //- false = dark
  const [theme, setTheme] = useState(true);

  const setSelectedFontHandler = (newFont: string) => {
    setSelectedFont(newFont);
  };

  const setThemeHandler = () => {
    setTheme((prevState) => {
      return !prevState;
    });
  };

  const themeSelectButtonStyles = !theme ? "justify-end" : "";

  return (
    <div className="w-full flex justify-end items-center mb-[52px]">
      <img src={logo} alt="logo" className="mr-[auto] h-[36px] w-[32px]" />
      <button
        type="button"
        onClick={() => {
          setSelectedFontHandler("test");
        }}
        className="flex items-center"
      >
        {selectedFont}
        <img
          src={icon_arrow_down}
          alt="arrow down"
          className="h-[16px] w-[12px] ml-[18px] mr-[26px]"
        />
      </button>
      <div className="h-[32px] w-[1px] border-r border-[#979797]"></div>
      <button
        type="button"
        onClick={setThemeHandler}
        className={`ml-[26px] mr-[20px] w-[40px] h-[20px] bg-[#979797] rounded-[10px] flex justify-start items-center ${themeSelectButtonStyles}`}
      >
        <div className="w-[14px] h-[14px] bg-[#ffffff] rounded-[50%] ml-[3px] mr-[3px]"></div>
      </button>
      {theme ? (
        <img src={moon_light} alt="light theme image" />
      ) : (
        <img src={moon_dark} alt="dark theme image" />
      )}
    </div>
  );
};

export default Header;
