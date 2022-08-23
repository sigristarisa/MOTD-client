import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RandomizerPage from "./components/RandomizerPage/RandomizerPage";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/randomizer' element={<RandomizerPage />} />
      </Routes>
    </div>
  );
};

export default App;
