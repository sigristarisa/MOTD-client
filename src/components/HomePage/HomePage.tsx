import React from "react";
import MainTitle from "./MainTitle";
import Lid from "./Lid";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <main className='homepage_main justify-items_center'>
      <MainTitle />
      <Lid />
    </main>
  );
};

export default HomePage;
