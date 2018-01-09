import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">

    <div className="container">
      <span className="score">Score: {props.score}</span>
    </div>
  </div>
)

export default Header;
