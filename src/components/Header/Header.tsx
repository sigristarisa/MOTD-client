import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

type NavBtn = {
  id: number;
  navigate: string;
  btnContent: string;
};

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [btnId, setBtnId] = useState<number>(0);

  const buttonArr: NavBtn[] = [
    { id: 0, navigate: "../", btnContent: "HOME" },
    { id: 1, navigate: "../about", btnContent: "ABOUT" },
    { id: 2, navigate: "../todays-mayonnaise", btnContent: "TODAY" },
  ];

  const getBtnId = (btnId: number): void => setBtnId(btnId);
  const activateBtn = (index: number): string => {
    return btnId === index ? "active" : "";
  };

  return (
    <header className='place-items_center'>
      <nav>
        <ul className='three-grid-columns'>
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
