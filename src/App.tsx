import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainTitle from "./components/MainTitle/MainTitle";
import Lid from "./components/HomePage/Lid";
import RandomizerPage from "./components/Randomizer/RandomizerPage";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const App: React.FC = () => {
  const uuid = uuidv4();
  const cache = require("memory-cache");

  return (
    <div className='App'>
      <Header />
      <main className='homepage_main justify-items_center'>
        <MainTitle />
        <Routes>
          <Route path='/' element={<Lid />} />
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
