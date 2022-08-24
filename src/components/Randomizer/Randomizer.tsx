import React, { useState, useEffect } from "react";
import client from "../../helpers/client";

type Dish = {
  id: number;
  name: string;
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
  const [mayoId, setMayoId] = useState<number>(1);
  const [mayonnaise, setMayonnaise] = useState<Mayonnaise>();

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
    setTimeout(() => clearInterval(randomizeMayoId), 3000);
  }, []);

  useEffect(() => {
    client.get(`/mayonnaise/${mayoId}`).then((res) => {
      console.log(res.data.data);
      setMayonnaise(res.data.data);
    });
  }, [mayoId]);

  return (
    <div>
      {mayonnaise && (
        <div>
          <img
            src={`http://localhost:4000${mayonnaise.image}.png`}
            alt={`${mayonnaise.name}`}
          />
          <p>{mayonnaise.image}</p>
        </div>
      )}
    </div>
  );
};

export default Randomizer;
