import React, { useState } from "react";
import Lid from "../Lid/Lid";
import Randomizer from "../Randomizer/Randomizer";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [toRandomizer, setToRandomizer] = useState<boolean>(false);
  return (
    <main className='homepage_main justify-items_center'>
      <div className='title_container place-items_center'>
        <h1>MOTD</h1>
        <h2>Mayonnaise Of The Day</h2>
      </div>
      {toRandomizer ? (
        <Randomizer />
      ) : (
        <Lid setToRandomizer={setToRandomizer} />
      )}
    </main>
  );
};

export default HomePage;
