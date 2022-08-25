import React from "react";
import MainTitle from "../HomePage/MainTitle";
import Randomizer from "./Randomizer";
import "./MainTitle.css";

const RandomizerPage: React.FC = () => {
  return (
    <main>
      <MainTitle />
      <Randomizer />
    </main>
  );
};

export default RandomizerPage;
