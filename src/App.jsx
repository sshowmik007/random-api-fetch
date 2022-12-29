import { createContext, useState } from "react";
import Header from "./components/Dictionary/Header";
import Results from "./components/Dictionary/Results";
import Jokes from "./components/Jokes";

// crete context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  // console.log(inputValue);
  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header />
        <Results />
        {/* <Jokes /> */}
      </div>
    </InputContext.Provider>
  );
}

export default App;
