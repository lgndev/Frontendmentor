import React from "react";
import { DictionaryModel } from "../../models/DictionaryModel";
import icon_play from "../../assets/images/icon-play.svg";

interface WordProps {
  jsonData: DictionaryModel[];
}

// https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react-
const Word: React.FC<WordProps> = (props) => {
  const audioHandler = () => {
    let phoneticAudio = new Audio(props.jsonData[0].phonetics[2].audio);
    phoneticAudio.play();
  };

  return (
    <div className="flex justify-between items-center mb-[40px]">
      <div>
        <div className="text-[64px]">{props.jsonData[0].word}</div>
        <div className="text-[24px]">{props.jsonData[0].phonetic}</div>
      </div>
      <button className="h-max" onClick={audioHandler}>
        <img src={icon_play} alt="audio play image" />
      </button>
    </div>
  );
};

export default Word;
