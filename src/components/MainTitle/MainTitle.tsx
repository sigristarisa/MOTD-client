import React from "react";
import "./MainTitle.css";

interface props {
  headerText: string;
}

const MainTitle: React.FC<props> = ({ headerText }) => {
  return (
    <div className='title_container place-items_center'>
      <h1>MOTD</h1>
      <h2>{headerText}</h2>
    </div>
  );
};

export default MainTitle;
