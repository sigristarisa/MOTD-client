import React from "react";
import MainTitle from "./MainTitle";
import Lid from "./Lid";
import "./HomePage.css";

interface props {
  uuid: string;
  cache: {
    get: Function;
  };
}

const HomePage: React.FC<props> = ({ uuid, cache }) => {
  console.log("can i get ", cache.get(`uuid ${uuid}`));
  return (
    <main className='homepage_main justify-items_center'>
      <MainTitle />
      <Lid />
    </main>
  );
};

export default HomePage;
