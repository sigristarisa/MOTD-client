import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import GoesWellWith from "./GoesWellWith";
import client from "../../helpers/client";
import spoon from "../../assets/spoon.png";
import "./Randomizer.css";

type Dish = {
  id: number;
  name: string;
  image: string;
};

type Combination = {
  id: number;
  mayonnaiseId: number;
  dishId: number;
  dish: Dish;
};

type Mayonnaise = {
  id: number;
  name: string;
  ingredient: string;
  portion: string;
  image: string;
  combination: Combination[];
};

const Randomizer: React.FC = () => {
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
    const randomizeMayoId: ReturnType<typeof setInterval> = setInterval(
      getRandomMayoId,
      100
    );
    setTimeout(() => clearInterval(randomizeMayoId), 4000);
    setTimeout(() => setShowMayoContent(true), 4500);
  }, []);

  useEffect(() => {
    client.get(`/mayonnaise/${mayoId}`).then((res) => {
      console.log(res.data.data);
      setMayonnaise(res.data.data);
    });
  }, [mayoId]);

  return (
    <div className='randomizer_container place-items_center'>
      {mayonnaise && (
        <div className='mayonnaise-content_container place-items_center'>
          <img
            src={`http://localhost:4000${mayonnaise.image}.png`}
            alt={`${mayonnaise.name}`}
            className='mayonnaise_img'
          />
        </div>
      )}
      {mayonnaise && showMayoContent && (
        <div className='mayonnaise-text_container four-grid-columns'>
          <h2>{mayonnaise.name.toUpperCase()}</h2>
          <img src={spoon} alt='spoon icon' id='spoon_img' />
          <Ingredients mayonnaise={mayonnaise} />
          <GoesWellWith mayonnaise={mayonnaise} />
        </div>
      )}
    </div>
  );
};

export default Randomizer;
