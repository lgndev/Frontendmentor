import { DictionaryModel } from "../../models/DictionaryModel";
import icon_new_window from "../../assets/images/icon-new-window.svg";

interface SourceProps {
  jsonData: DictionaryModel[];
}

const Source: React.FC<SourceProps> = (props) => {
  return (
    <div className="flex justify-start items-center">
      <p className="mr-[20px] underline">Source</p>
      <a href={props.jsonData[0].sourceUrls[0]} className="mr-[9px] underline">
        {props.jsonData[0].sourceUrls[0]}
      </a>
      <img src={icon_new_window} alt="new window image" />
    </div>
  );
};

export default Source;
