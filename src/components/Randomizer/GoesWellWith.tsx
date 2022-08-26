import React from "react";
import { Mayonnaise } from "../../helpers/types";

interface props {
  mayonnaise: Mayonnaise;
}

const GoesWellWith: React.FC<props> = ({ mayonnaise }) => {
  return (
    <div className='goes-well-with_container two-grid-columns_expand-two justify-items_start'>
      <p>Goes well with</p>
      <ul className='seven-grid-columns icon_container'>
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
