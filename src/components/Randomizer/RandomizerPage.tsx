import React from "react";
import ComeBackAgain from "./ComeBackAgain";
import Randomizer from "./Randomizer";

interface props {
  uuid: string;
  cache: {
    put: Function;
    get: Function;
  };
}
const RandomizerPage: React.FC<props> = ({ uuid, cache }) => {
  const hasAccessed = (): boolean => {
    console.log("uuid in radnomizerPage", uuid);
    console.log("whats get: ", cache.get(`uuid ${uuid}`));
    return cache.get(`uuid ${uuid}`) ? true : false;
  };

  return (
    <div>
      {hasAccessed() ? (
        <ComeBackAgain />
      ) : (
        <Randomizer uuid={uuid} cache={cache} />
      )}
    </div>
  );
};

export default RandomizerPage;
