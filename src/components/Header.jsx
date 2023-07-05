import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div>
        <a href="" className="logo">
          <h1>Heros Page</h1>
        </a>
      </div>
      <ul className="ul-header">
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Games</li>
        </a>
        <a href="">
          <li>News</li>
        </a>
        <a href="">
          <li>Store</li>
        </a>
        <a href="">
          <li>Services</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
