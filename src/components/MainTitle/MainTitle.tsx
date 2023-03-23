import React from "react";

interface props {
  headerText: string;
}

const MainTitle: React.FC<props> = ({ headerText }) => {
  return (
    <div className="w-screen h-1/4 grid place-items-center text-red-100 bg-cream-60">
      <h1 className="text-9xl font-righteous">MOTD</h1>
      <h2 className=" text-2xl font-comfortaa">{headerText}</h2>
    </div>
  );
};

export default MainTitle;
