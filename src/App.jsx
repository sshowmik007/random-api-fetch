import { useState } from "react";
import { InputContext } from "./components/ContextAPI/Context";
import Header from "./components/Dictionary/Header";
import Results from "./components/Dictionary/Results";
import Jokes from "./components/Jokes";
import Darkmode from "./components/DarkMode/Darkmode";

// crete context

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
        {/* <Header />
        <Results />
        <Jokes /> */}
        <Darkmode />
      </div>
    </InputContext.Provider>
  );
}

export default App;
