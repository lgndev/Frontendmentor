import { useEffect, useState } from "react";
import Word from "./Word";
import Noun from "./Noun";
import Verb from "./Verb";
import Source from "./Source";

const Response = () => {
  const [jsonData, setJsonData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const getWord = async (word: string) => {
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        if (!res.ok) {
          throw new Error(`${res.status}`);
        } else {
          const jsonData = await res.json();
          setJsonData(jsonData);
        }
      } catch (err) {
        console.error("err: ", err);
        setError("there was an error");
      }
    };

    getWord("keyboard");
  }, []);

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
      {error ? error : ""}
    </div>
  );
};

export default Response;
