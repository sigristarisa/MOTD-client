import React from "react";
import Lid from "../Lid/Lid";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <main className='homepage_main justify-items_center'>
      <div className='title_container place-items_center'>
        <h1>MOTD</h1>
        <h2>Mayonnaise Of The Day</h2>
      </div>
      <Lid />
    </main>
  );
};

export default HomePage;
