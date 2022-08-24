import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import mayonnaiseLid from "../../assets/mayonnaise-lid.png";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const moveToRandomizer = (): void => {
    setIsClicked(false);
    navigate("../todays-mayonnaise");
  };

  return (
    <main className='homepage_main place-items_center'>
      <div className='title_container place-items_center'>
        <h1>MOTD</h1>
        <h2>Mayonnaise Of The Day</h2>
      </div>
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
    </main>
  );
};

export default HomePage;
