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
    <header className="cream-100">
      <nav>
        <ul className="three-grid-columns place-items_center">
          {buttonArr.map((btn: NavBtn, index: number) => (
            <li key={index} className={activateBtn(index)}>
              <button
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
