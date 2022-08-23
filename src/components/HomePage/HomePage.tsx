import React from "react";
import "./HomePage.css";
const HomePage: React.FC = () => {
  return (
    <main className='homepage-main two-grid-column'>
      <aside className='hompage-left-container two-grid-column'>
        <p className='bg-cream place-item_center'>M</p>
        <p className='bg-red place-item_center'>O</p>
        <p className='bg-red place-item_center'>T</p>
        <p className='bg-cream place-item_center'>D</p>
      </aside>
      <aside className='homepage-right-container'>
        <h1 className='bg-cream place-item_center'>Mayonnaise Of The Day</h1>
        <div className='homepage-rightbottom-container four-grid-column'>
          <div className='bg-cream'></div>
          <button className='bg-red hover-red'>Start Trial</button>
          <button className='bg-cream hover-cream'>What's MOTD?</button>
          <div className='bg-red'></div>
          <div className='bg-red'></div>
          <button className='bg-cream hover-cream'>Login</button>
          <button className='bg-red hover-red'>Signup</button>
          <div className='bg-cream'></div>
        </div>
      </aside>
    </main>
  );
};

export default HomePage;
