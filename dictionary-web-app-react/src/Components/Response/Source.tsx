import { DictionaryModel } from "../../models/DictionaryModel";
import icon_new_window from "../../assets/images/icon-new-window.svg";

interface SourceProps {
  jsonData: DictionaryModel[];
}

const Source: React.FC<SourceProps> = (props) => {
  return (
    <div className="">
      <p className="underline text-[16px]">Source</p>
      <div className="flex items-center flex-wrap">
        <a
          href={props.jsonData[0].sourceUrls[0]}
          className="underline text-[16px] mr-[15px]"
        >
          {props.jsonData[0].sourceUrls[0]}
        </a>
        <img
          src={icon_new_window}
          alt="new window image"
          className="w-[12px] h-[12px]"
        />
      </div>
    </div>
  );
};

export default Source;
