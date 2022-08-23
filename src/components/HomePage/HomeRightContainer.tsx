import React from "react";
import { useNavigate } from "react-router-dom";

const HomeRightContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <aside className='homepage-right-container'>
      <h1 className='bg-cream place-item_center'>Mayonnaise Of The Day</h1>
      <div className='homepage-rightbottom-container four-grid-column'>
        <div className='bg-white'></div>
        <button
          className='bg-red hover-red'
          onClick={() => navigate("../randomizer")}
        >
          Start Trial
        </button>
        <button className='bg-white hover-cream'>What's MOTD?</button>
        <div className='bg-red'></div>
        <div className='bg-red'></div>
        <button className='bg-white hover-cream'>Login</button>
        <button className='bg-red hover-red'>Signup</button>
        <div className='bg-white'></div>
      </div>
    </aside>
  );
};

export default HomeRightContainer;
