import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Randomizer from "./components/Randomizer/RandomizerPage";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todays-mayonnaise' element={<Randomizer />} />
      </Routes>
    </div>
  );
};

export default App;
