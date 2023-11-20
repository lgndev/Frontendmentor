import { DictionaryModel } from "../../models/DictionaryModel";

interface NounProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<NounProps> = (props) => {
  return (
    <>
      <div className="flex justify-start items-center mb-[32px]">
        <h1 className="mr-[16px] text-[18px] font-bold font-italic">noun</h1>
        <div className="w-full h-[1px] border-b border-[#E9E9E9]"></div>
      </div>
      <h2 className="mb-[17px] text-[16px] text-[#757575]">Meaning</h2>
      <ul className="ml-[24px] list-disc">
        {props.jsonData[0].meanings[0].definitions.map((definition) => {
          return (
            <li className="text-[15px] mb-[13px]">{definition.definition}</li>
          );
        })}
      </ul>
      <div className="mb-[32px] flex justify-start items-center">
        <h2 className="mr-[24px] text-[16px]">Synonyms</h2>
        <button type="button" className=" text-[16px] underline font-bold">
          {props.jsonData[0].meanings[0].synonyms[0]}
        </button>
      </div>
    </>
  );
};

export default Noun;
