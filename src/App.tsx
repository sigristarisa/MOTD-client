import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainTitle from "./components/MainTitle/MainTitle";
import Lid from "./components/Lid/Lid";
import AboutPage from "./components/About/AboutPage";
import RandomizerPage from "./components/Randomizer/RandomizerPage";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const App: React.FC = () => {
  const cache = require("memory-cache");
  const [btnId, setBtnId] = useState<number>(0);
  const [uuid] = useState<string>(uuidv4());
  const [headerText, setHeaderText] = useState<string>("Mayonnaise Of The Day");

  const getBtnId = (btnId: number): void => setBtnId(btnId);
  const activateBtn = (index: number): string => {
    return btnId === index ? "active" : "";
  };

  return (
    <div className="App w-screen h-screen m-0 p-0">
      <Header
        getBtnId={getBtnId}
        activateBtn={activateBtn}
        setHeaderText={setHeaderText}
      />
      <main className="w-screen h-4/5 border-red">
        <MainTitle headerText={headerText} />
        <Routes>
          <Route
            path="/"
            element={<Lid getBtnId={getBtnId} setHeaderText={setHeaderText} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/todays-mayonnaise"
            element={<RandomizerPage uuid={uuid} cache={cache} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
