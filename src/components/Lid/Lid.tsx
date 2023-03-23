import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import mayonnaiseLid from "../../assets/mayonnaise-lid.png";

interface props {
  getBtnId: Function;
  setHeaderText: Function;
}

const Lid: React.FC<props> = ({ getBtnId, setHeaderText }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const moveToRandomizer = (): void => {
    setIsClicked(false);
    getBtnId(2);
    setHeaderText("Your Mayonnaise Of The Day Is...");
    navigate("../todays-mayonnaise");
  };

  return (
    <div className="w-screen h-3/4 bg-cream-60 grid justify-items-center">
      {isClicked && (
        <OutsideClickHandler onOutsideClick={() => setIsClicked(false)}>
          <button
            className="w-44 h-14 font-comfortaa text-red-100 bg-cream-100 border-non rounded-lg absolute bottom-1/3 hover:bg-cream-60"
            onClick={() => moveToRandomizer()}>
            You sure?<br></br> It's only once a day
          </button>
        </OutsideClickHandler>
      )}
      <button
        className="w-48 h-14 font-comfortaa text-red-100 bg-white border-none rounded-lg absolute bottom-1/4 hover:bg-cream-100"
        onClick={() => setIsClicked(!isClicked)}>
        Mix My Day!
      </button>
      <img className="self-end" src={mayonnaiseLid} alt="mayonnaise lid" />
    </div>
  );
};

export default Lid;
