import { DictionaryModel } from "../../models/DictionaryModel";

interface VerbProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<VerbProps> = (props) => {
  return (
    <>
      <div className="flex justify-start items-center mb-[40px]">
        <h1 className="mr-[20px] text-[24px] leading-[29px]">verb</h1>
        <div className="w-full h-[1px] border-b border-[#E9E9E9]"></div>
      </div>
      <h2 className="mb-[25px] text-[20px]">Meaning</h2>
      <div className="pb-[40px]">
        <ul className="ml-[47px] list-disc">
          {props.jsonData[0].meanings[1].definitions.map((definition) => {
            return (
              <>
                <li className="text-[18px] mb-[13px]">
                  {definition.definition}
                </li>
                {definition.example && (
                  <li className="text-[18px] mb-[13px] list-none">{`"${definition.example}"`}</li>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-[1px] border-b border-[#E9E9E9] mb-[19px]"></div>
    </>
  );
};

export default Noun;
