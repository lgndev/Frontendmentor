import logo from "../assets/images/logo.svg";
import moon_light from "../assets/images/icon-moon-light.svg";
import moon_dark from "../assets/images/icon-moon-dark.svg";
import icon_arrow_down from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";
import { useDictionaryStore } from "../store/dictionaryStore";

const Header = () => {
  const [showFontSelect, setShowFontSelect] = useState(false);
  const setTheme = useDictionaryStore((state) => state.setTheme);
  const theme = useDictionaryStore((state) => state.theme);

  return (
    <div className="w-full flex justify-end items-center mb-[52px]">
      <img src={logo} alt="logo" className="mr-[auto] w-[28px] h-[32px]" />
      <button
        type="button"
        onClick={() => {
          setShowFontSelect((prevState) => {
            return !prevState;
          });
        }}
        className="flex items-center text-[14px] text-[#2d2d2d] font-bold relative"
        style={{
          color: theme[theme.active].secondary,
        }}
      >
        {"Sans Serif"}
        <img
          src={icon_arrow_down}
          alt="arrow down"
          className="w-[12px] h-[6px] ml-[16px] mr-[16px]"
        />
        <div
          className={`${
            showFontSelect ? "block" : "hidden"
          } fontSelect absolute p-[16px] rounded-[8px] text-[14px] right-[0] top-[0] mt-[30px] mr-[16px] text-left z-10`}
          style={{
            boxShadow:
              theme.active === "light"
                ? "0px 0px 10px 5px rgba(0,0,0,0.25)"
                : "0px 0px 10px 5px rgba(164, 69, 237, .25)",
            color: theme[theme.active].secondary,
            backgroundColor: theme[theme.active].background,
          }}
        >
          <p>Sans Serif</p>
          <p>Serif</p>
          <p>Mono</p>
        </div>
      </button>
      <div
        className="w-[1px] h-[32px] border-r"
        style={{
          borderRightColor:
            theme.active === "light"
              ? theme[theme.active].primary
              : theme[theme.active].secondary,
        }}
      ></div>
      <button
        type="button"
        onClick={setTheme}
        className={`ml-[16px] mr-[12px] w-[40px] h-[20px] rounded-[10px] flex justify-start items-center`}
        style={{
          backgroundColor:
            theme.active === "light"
              ? theme[theme.active].primary
              : theme[theme.active].accent,
          justifyContent: theme.active === "light" ? "flex-start" : "flex-end",
        }}
      >
        <div className="w-[14px] h-[14px] bg-[#ffffff] rounded-[50%] ml-[3px] mr-[3px]"></div>
      </button>
      {theme.active === "light" ? (
        <img src={moon_light} alt="light theme image" />
      ) : (
        <img src={moon_dark} alt="dark theme image" />
      )}
    </div>
  );
};

export default Header;
