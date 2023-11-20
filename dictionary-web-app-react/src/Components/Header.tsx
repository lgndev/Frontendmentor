import logo from "../assets/images/logo.svg";
import moon_light from "../assets/images/icon-moon-light.svg";
import moon_dark from "../assets/images/icon-moon-dark.svg";
import icon_arrow_down from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const Header = () => {
  const [selectedFont, setSelectedFont] = useState("Sans Serif");
  const [showFontSelect, setShowFontSelect] = useState(false);
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
      <img src={logo} alt="logo" className="mr-[auto] w-[28px] h-[32px]" />
      <button
        type="button"
        onClick={() => {
          setShowFontSelect((prevState) => {
            return !prevState;
          });
          setSelectedFontHandler("test");
        }}
        className="flex items-center text-[14px] text-[#2d2d2d] font-bold"
      >
        {selectedFont}
        <img
          src={icon_arrow_down}
          alt="arrow down"
          className="w-[12px] h-[6px] ml-[16px] mr-[16px]"
        />
        <div
          className={`${
            showFontSelect ? "block" : "hidden"
          } fontSelect absolute bg-[#ffffff] p-[16px] rounded-[8px]  text-[14px] text-left top-[60px]  z-10`}
          style={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
          }}
        >
          <p>Sans Serif</p>
          <p>Serif</p>
          <p>Mono</p>
        </div>
      </button>
      <div className="w-[1px] h-[32px] border-r border-[#979797]"></div>
      <button
        type="button"
        onClick={setThemeHandler}
        className={`ml-[16px] mr-[12px] w-[40px] h-[20px] bg-[#757575] rounded-[10px] flex justify-start items-center ${themeSelectButtonStyles}`}
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
