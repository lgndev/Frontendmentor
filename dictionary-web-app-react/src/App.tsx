import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Response from "./Components/Response/Response";

function App() {
  const [response, setResponse] = useState("");

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full max-w-[768px] max-h-[1197px] px-[32px] py-[36.5px]">
          <Header />
          <Input />
          <Response />
        </div>
      </div>
    </>
  );
}

export default App;
