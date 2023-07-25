import { DictionaryModel } from "../../models/DictionaryModel";

interface NounProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<NounProps> = (props) => {
  return (
    <>
      <div className="flex justify-start items-center mb-[40px]">
        <h1 className="mr-[20px] text-[24px] leading-[29px]">noun</h1>
        <div className="w-full h-[1px] border-b border-[#E9E9E9]"></div>
      </div>

      <h2 className="mb-[25px] text-[20px]">Meaning</h2>
      <ul className="ml-[47px] list-disc">
        {props.jsonData[0].meanings[0].definitions.map((definition) => {
          return (
            <li className="text-[18px] mb-[13px]">{definition.definition}</li>
          );
        })}
      </ul>
      <div className=" mt-[40px] mb-[40px] flex justify-start items-center">
        <h2 className="mr-[22px] text-[20px]">Synonyms</h2>
        <button type="button" className="mr-[22px] text-[20px] underline">
          {props.jsonData[0].meanings[0].synonyms[0]}
        </button>
      </div>
    </>
  );
};

export default Noun;
