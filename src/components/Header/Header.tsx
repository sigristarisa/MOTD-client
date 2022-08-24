import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className='place-items_center'>
      <nav className='three-grid-columns'>
        <button>HOME</button>
        <button>ABOUT</button>
        <button>TODAY</button>
      </nav>
    </header>
  );
};

export default Header;
