import { DictionaryModel } from "../../models/DictionaryModel";
import { useDictionaryStore } from "../../store/dictionaryStore";

interface NounProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<NounProps> = (props) => {
  const theme = useDictionaryStore((state) => state.theme);

  return (
    <>
      <div className="flex justify-start items-center mb-[32px]">
        <h1
          className="mr-[16px] text-[18px] font-bold font-italic"
          style={{
            color: theme[theme.active].secondary,
          }}
        >
          noun
        </h1>
        <div
          className="w-full h-[1px] border-b "
          style={{
            borderColor:
              theme.active === "light"
                ? theme[theme.active].primary
                : theme[theme.active].secondary,
          }}
        ></div>
      </div>
      <h2
        className="mb-[17px] text-[16px] "
        style={{
          color: theme[theme.active].primary,
        }}
      >
        Meaning
      </h2>
      <ul className="ml-[24px] list-disc">
        {props.jsonData[0].meanings[0].definitions.map((definition) => {
          return (
            <li
              className="text-[15px] mb-[13px]"
              style={{
                color: theme[theme.active].secondary,
              }}
            >
              {definition.definition}
            </li>
          );
        })}
      </ul>
      <div className="mb-[32px] flex justify-start items-center">
        <h2
          className="mr-[24px] text-[16px]"
          style={{
            color: theme[theme.active].primary,
          }}
        >
          Synonyms
        </h2>
        <button
          type="button"
          className=" text-[16px] underline font-bold"
          style={{
            color: theme[theme.active].accent,
          }}
        >
          {props.jsonData[0].meanings[0].synonyms[0]}
        </button>
      </div>
    </>
  );
};

export default Noun;
