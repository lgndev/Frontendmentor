import { DictionaryModel } from "../../models/DictionaryModel";
import { useDictionaryStore } from "../../store/dictionaryStore";

interface NounProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<NounProps> = (props) => {
  const theme = useDictionaryStore((state) => state.theme);
  const noun = props.jsonData[0].meanings.find(
    (el) => el.partOfSpeech === "noun"
  );

  return (
    <>
      {noun && (
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
            {noun.definitions.map((definition) => {
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
            <p
              type="button"
              className=" text-[16px] font-bold"
              style={{
                color: theme[theme.active].accent,
              }}
            >
              {props.jsonData[0].meanings[0].synonyms[0]}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Noun;
