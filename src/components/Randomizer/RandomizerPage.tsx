import React from "react";
import MainTitle from "../HomePage/MainTitle";
import Randomizer from "./Randomizer";

interface props {
  uuid: string;
  cache: {
    put: Function;
    get: Function;
  };
}
const RandomizerPage: React.FC<props> = ({ uuid, cache }) => {
  console.log("can i get ", cache.get(`uuid ${uuid}`));
  console.log("uuid ", uuid);

  const check = (): boolean => {
    return cache.get(`uuid ${uuid}`) === uuid;
  };
  return (
    <main>
      <MainTitle />
      {check() ? <div>HOPE</div> : <Randomizer uuid={uuid} cache={cache} />}
    </main>
  );
};

export default RandomizerPage;
