import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import GoesWellWith from "./GoesWellWith";
import client from "../../helpers/client";
import spoon from "../../assets/spoon.png";
import { Mayonnaise } from "../../helpers/types";
import "./Randomizer.css";

interface props {
  uuid: string;
  cache: {
    put: Function;
  };
}

const Randomizer: React.FC<props> = ({ uuid, cache }) => {
  const [mayoId, setMayoId] = useState<number>();
  const [mayonnaise, setMayonnaise] = useState<Mayonnaise>();
  const [showMayoContent, setShowMayoContent] = useState<boolean>(false);

  const getRandomMayoId = (): void => {
    const maxMayoId = 100;
    const minMayoId = 1;
    const randomMayoId: number = Math.floor(
      Math.random() * (maxMayoId - minMayoId) + minMayoId
    );
    setMayoId(randomMayoId);
  };

  useEffect(() => {
    cache.put(`uuid ${uuid}`, uuid, 86400000);

    const randomizeMayoId: ReturnType<typeof setInterval> = setInterval(
      getRandomMayoId,
      100
    );
    setTimeout(() => clearInterval(randomizeMayoId), 4000);
    setTimeout(() => setShowMayoContent(true), 5000);
  }, []);

  useEffect(() => {
    client.get(`/mayonnaise/${mayoId}`).then((res) => {
      setMayonnaise(res.data.data);
    });
  }, [mayoId]);

  return (
    <div className='randomizer_container place-items_center'>
      {mayonnaise && (
        <div className='mayonnaise-img_container place-items_center'>
          <img
            src={`http://localhost:4000${mayonnaise.image}.png`}
            alt={`${mayonnaise.name}`}
            className='mayonnaise_img'
          />
        </div>
      )}
      {mayonnaise && showMayoContent ? (
        <div className='mayonnaise-text_container four-grid-columns_custom place-items_center'>
          <h2 className='justify-items_end'>{mayonnaise.name.toUpperCase()}</h2>
          <div className='spoon_container justify-items_end'>
            <img src={spoon} alt='spoon icon' id='spoon_img' />
          </div>
          <Ingredients mayonnaise={mayonnaise} />
          <GoesWellWith mayonnaise={mayonnaise} />
        </div>
      ) : (
        <div className='spacing_container'></div>
      )}
    </div>
  );
};

export default Randomizer;
