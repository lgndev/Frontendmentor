import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [selectedFont, setSelectedFont] = useState("sansSerif");
  const [theme, setTheme] = useState("light");
  const [response, setResponse] = useState("");

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full max-w-[768px] max-h-[1197px] px-[32px] py-[36.5px]">
          <div className="w-full">Header</div>
          <div className="w-full">Input</div>
          <div className="w-full">Response</div>
        </div>
      </div>
    </>
  );
}

export default App;
