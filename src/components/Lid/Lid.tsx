import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import mayonnaiseLid from "../../assets/mayonnaise-lid.png";
import "./Lid.css";

interface props {
  setToRandomizer: React.Dispatch<boolean>;
}

const Lid: React.FC<props> = ({ setToRandomizer }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const moveToRandomizer = (): void => {
    setIsClicked(false);
    setToRandomizer(true);
  };

  return (
    <div className='lid_container justify-items_center'>
      {isClicked && (
        <OutsideClickHandler onOutsideClick={() => setIsClicked(false)}>
          <button className='you-sure_btn' onClick={() => moveToRandomizer()}>
            You sure?<br></br> It's only once a day
          </button>
        </OutsideClickHandler>
      )}
      <button
        className='mix-my-day_btn'
        onClick={() => setIsClicked(!isClicked)}
      >
        Mix My Day!
      </button>
      <img src={mayonnaiseLid} alt='mayonnaise lid' />
    </div>
  );
};

export default Lid;
