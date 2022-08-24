import React from "react";
import mayonnaiseLid from "../../assets/mayonnaise-lid.png";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <main className='homepage-main place-items_center'>
      <div className='place-items_center'>
        <h1>MOTD</h1>
        <h2>Mayonnaise Of The Day</h2>
      </div>
      <img src={mayonnaiseLid} alt='mayonnaise lid' />
      <button>Mix My Day!</button>
    </main>
  );
};

export default HomePage;
