import React from "react";
import { Mayonnaise } from "../../helpers/types";

interface props {
  mayonnaise: Mayonnaise;
}

const Ingredients: React.FC<props> = ({ mayonnaise }) => {
  return (
    <div className='ingredient_container justify-items_start'>
      <p>2 tbsp. mayonnaise</p>
      <p>
        {mayonnaise.portion} {mayonnaise.ingredient}
      </p>
    </div>
  );
};

export default Ingredients;
