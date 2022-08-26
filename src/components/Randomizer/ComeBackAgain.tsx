import React from "react";
import mayonnaiseImage from "../../assets/cooking_mayonnaise_kakeru.png";
import "./ComeBackAgain.css";

const ComeBackAgain: React.FC = () => {
  return (
    <div className='come-back-again_container  place-items_center'>
      <div className='place-items_center'>
        <div className='mayo-image_container'>
          <img src={mayonnaiseImage} alt='mayonnaise logo' />
        </div>
        <h2>You can get your mayonnaise only once a day!</h2>
        <p>Come back in 24 hours</p>
      </div>
    </div>
  );
};

export default ComeBackAgain;
