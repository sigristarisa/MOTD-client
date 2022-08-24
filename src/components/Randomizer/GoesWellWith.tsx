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

const GoesWellWith: React.FC<props> = ({ mayonnaise }) => {
  return (
    <div>
      <p>Goes well with</p>
      <ul>
        {mayonnaise.combination.map((combination, index) => {
          return (
            <li key={index} className='dish-icon_container'>
              <img
                src={`http://localhost:4000${combination.dish.image}`}
                alt={`${combination.dish.name} icon`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GoesWellWith;
