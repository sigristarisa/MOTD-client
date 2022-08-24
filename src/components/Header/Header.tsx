import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className='place-items_center'>
      <nav className='three-grid-columns'>
        <button onClick={() => navigate("../")}>HOME</button>
        <button>ABOUT</button>
        <button onClick={() => navigate("../todays-mayonnaise")}>TODAY</button>
      </nav>
    </header>
  );
};

export default Header;
