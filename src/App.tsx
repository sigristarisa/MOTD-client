import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainTitle from "./components/MainTitle/MainTitle";
import Lid from "./components/HomePage/Lid";
import RandomizerPage from "./components/Randomizer/RandomizerPage";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const App: React.FC = () => {
  const cache = require("memory-cache");
  const [btnId, setBtnId] = useState<number>(0);
  const [uuid] = useState<string>(uuidv4());

  const getBtnId = (btnId: number): void => setBtnId(btnId);
  const activateBtn = (index: number): string => {
    return btnId === index ? "active" : "";
  };

  return (
    <div className='App'>
      <Header getBtnId={getBtnId} activateBtn={activateBtn} />
      <main className='homepage_main justify-items_center'>
        <MainTitle />
        <Routes>
          <Route path='/' element={<Lid getBtnId={getBtnId} />} />
          <Route
            path='/todays-mayonnaise'
            element={<RandomizerPage uuid={uuid} cache={cache} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
