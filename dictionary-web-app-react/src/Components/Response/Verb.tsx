import { DictionaryModel } from "../../models/DictionaryModel";

interface VerbProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<VerbProps> = (props) => {
  return (
    <>
      <div className="flex justify-start items-center mb-[31px]">
        <h1 className="mr-[25px] text-[18px] font-bold font-italic">verb</h1>
        <div className="w-full h-[1px] border-b border-[#E9E9E9]"></div>
      </div>
      <h2 className="mb-[16px] text-[16px]">Meaning</h2>
      <div className="pb-[32px]">
        <ul className="ml-[24px] list-disc">
          {props.jsonData[0].meanings[1].definitions.map((definition) => {
            return (
              <>
                <li className="text-[15px] mb-[13px]">
                  {definition.definition}
                </li>
                {definition.example && (
                  <li className="text-[15px]list-none">{`"${definition.example}"`}</li>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-[1px] border-b border-[#E9E9E9] mb-[24px]"></div>
    </>
  );
};

export default Noun;
