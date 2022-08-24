import React from "react";

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

interface props {
  mayonnaise: Mayonnaise;
}

const Ingredients: React.FC<props> = ({ mayonnaise }) => {
  return (
    <div>
      <p>2 tbsp. mayonnaise</p>
      <p>
        {mayonnaise.portion} {mayonnaise.ingredient}
      </p>
    </div>
  );
};

export default Ingredients;
