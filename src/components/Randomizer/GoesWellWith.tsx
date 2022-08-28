import React from "react";
import { Mayonnaise } from "../../helpers/types";

interface props {
  mayonnaise: Mayonnaise;
}

const GoesWellWith: React.FC<props> = ({ mayonnaise }) => {
  const host = process.env.REACT_APP_API_URL;

  return (
    <div className='goes-well-with_container two-grid-columns_expand-two justify-items_start'>
      <p>Goes well with</p>
      <ul className='seven-grid-columns icon_container'>
        {mayonnaise.combination.map((combination, index) => {
          return (
            <li key={index} className='dish-icon_container'>
              <img
                src={`${host}${combination.dish.image}`}
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
