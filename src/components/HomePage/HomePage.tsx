import React from "react";
import "./HomePage.css";
const HomePage: React.FC = () => {
  return (
    <main className='homepage-main two-grid-column'>
      <aside className='hompage-left-container two-grid-column'>
        <p className='background-cream place-item_center'>M</p>
        <p className='background-red place-item_center'>O</p>
        <p className='background-red place-item_center'>T</p>
        <p className='background-cream place-item_center'>D</p>
      </aside>
      <aside className='homepage-right-container'>
        <h1 className='background-cream place-item_center'>
          Mayonnaise Of The Day
        </h1>
        <div className='homepage-rightbottom-container four-grid-column'>
          <div className='background-cream'></div>
          <button className='background-red hover-red'>Start Trial</button>
          <button className='background-cream hover-cream'>What's MOTD?</button>
          <div className='background-red'></div>
          <div className='background-red'></div>
          <button className='background-cream hover-cream'>Login</button>
          <button className='background-red hover-red'>Signup</button>
          <div className='background-cream'></div>
        </div>
      </aside>
    </main>
  );
};

export default HomePage;
