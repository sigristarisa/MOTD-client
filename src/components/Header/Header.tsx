import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

type NavBtn = {
  id: number;
  navigate: string;
  btnContent: string;
};

interface props {
  getBtnId: Function;
  activateBtn: Function;
}

const Header: React.FC<props> = ({ getBtnId, activateBtn }) => {
  const navigate = useNavigate();

  const buttonArr: NavBtn[] = [
    { id: 0, navigate: "../", btnContent: "HOME" },
    { id: 1, navigate: "../about", btnContent: "ABOUT" },
    { id: 2, navigate: "../todays-mayonnaise", btnContent: "TODAY" },
  ];

  return (
    <header className='place-items_center'>
      <nav>
        <ul className='three-grid-columns place-items_center'>
          {buttonArr.map((btn: NavBtn, index: number) => (
            <li key={index} className={activateBtn(index)}>
              <button
                onClick={() => {
                  getBtnId(btn.id);
                  navigate(`${btn.navigate}`);
                }}
              >
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
