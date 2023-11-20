import React from "react";
import { DictionaryModel } from "../../models/DictionaryModel";
import icon_play from "../../assets/images/icon-play.svg";

interface WordProps {
  jsonData: DictionaryModel[];
}

// https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react-
const Word: React.FC<WordProps> = (props) => {
  const audioHandler = () => {
    // loop through phonetics arr
    // use "BY-SA 3.0" license audio
    const saLicense = props.jsonData[0].phonetics.find(
      (el) => el?.license?.name === "BY-SA 3.0"
    );

    if (saLicense) {
      const phoneticAudioElement = new Audio(saLicense.audio);
      phoneticAudioElement.play();
    }
  };

  return (
    <div className="flex justify-between items-center mb-[32px]">
      <div>
        <div className="text-[32px] text-[#2d2d2d] font-bold mb-[8px]">
          {props.jsonData[0].word}
        </div>
        <div className="text-[24px] text-[#a445ed]">
          {props.jsonData[0].phonetic}
        </div>
      </div>
      <button className="h-max" onClick={audioHandler}>
        <img
          src={icon_play}
          alt="audio play image"
          className="w-[48px] h-[48px]"
        />
      </button>
    </div>
  );
};

export default Word;
