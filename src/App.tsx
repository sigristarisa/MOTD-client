import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import RandomizerPage from "./components/Randomizer/RandomizerPage";
import { v4 as uuidv4 } from "uuid";

import "./index.css";

const App: React.FC = () => {
  const uuid = uuidv4();
  const cache = require("memory-cache");
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage uuid={uuid} cache={cache} />} />
        <Route
          path='/todays-mayonnaise'
          element={<RandomizerPage uuid={uuid} cache={cache} />}
        />
      </Routes>
    </div>
  );
};

export default App;
