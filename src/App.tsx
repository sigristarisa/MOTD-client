import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
