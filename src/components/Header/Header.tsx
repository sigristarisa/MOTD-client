import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBtn } from "../../helpers/types";

interface props {
  getBtnId: Function;
  activateBtn: Function;
  setHeaderText: Function;
}

const Header: React.FC<props> = ({ getBtnId, activateBtn, setHeaderText }) => {
  const navigate = useNavigate();

  const buttonArr: NavBtn[] = [
    {
      id: 0,
      navigate: "../",
      btnContent: "HOME",
      headerText: "Mayonnaise Of The Day",
    },
    { id: 1, navigate: "../about", btnContent: "ABOUT", headerText: null },
    {
      id: 2,
      navigate: "../todays-mayonnaise",
      btnContent: "TODAY",
      headerText: "Your Mayonnaise Of The Day Is...",
    },
  ];

  return (
    <header className="w-screen h-1/5 font-comfortaa bg-cream-60 text-red-100">
      <nav className="h-full grid place-items-center">
        <ul className="w-1/2 grid grid-cols-3 place-items-center">
          {buttonArr.map((btn: NavBtn, index: number) => (
            <li key={index} className={activateBtn(index)}>
              <button
                className="text-2xl"
                onClick={() => {
                  getBtnId(btn.id);
                  setHeaderText(btn.headerText);
                  navigate(`${btn.navigate}`);
                }}>
                {btn.btnContent}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
