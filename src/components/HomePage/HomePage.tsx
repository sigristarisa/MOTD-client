import React from "react";
import HomeLeftContainer from "./HomeLeftContainer";
import HomeRightContainer from "./HomeRightContainer";
import "./HomePage.css";
const HomePage: React.FC = () => {
  return (
    <main className='homepage-main two-grid-column'>
      <HomeLeftContainer />
      <HomeRightContainer />
    </main>
  );
};

export default HomePage;
