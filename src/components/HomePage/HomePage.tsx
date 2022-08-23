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
      <div className='hompage-right-container'></div>
    </main>
  );
};

export default HomePage;
