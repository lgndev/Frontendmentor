import Word from "./Word";
import Noun from "./Noun";
import Verb from "./Verb";
import Source from "./Source";
import { useDictionaryStore } from "../../store/dictionaryStore";

const Response = () => {
  const jsonData = useDictionaryStore((state) => state?.response?.jsonData);
  const error = useDictionaryStore((state) => state?.response?.error);
  const theme = useDictionaryStore((state) => state.theme);

  const ErrorComponent = () => {
    return (
      <div>
        <p className="text-[18px] text-center mb-[13px]">🙁</p>
        <p
          className="text-[18px] font-bold text-center mb-[13px]"
          style={{
            color: theme[theme.active].secondary,
          }}
        >
          No Definitions Found
        </p>
        <p
          className="text-[18px] text-center mb-[13px]"
          style={{
            color: theme[theme.active].primary,
          }}
        >
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  };

  return (
    <div className="w-full">
      {jsonData.length > 0 && (
        <>
          <Word jsonData={jsonData} />
          <Noun jsonData={jsonData} />
          <Verb jsonData={jsonData} />
          <Source jsonData={jsonData} />
        </>
      )}
      {error && <ErrorComponent />}
    </div>
  );
};

export default Response;
