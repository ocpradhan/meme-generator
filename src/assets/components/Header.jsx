import React from "react";
import trollFace from "../img/troll-face.png";

/*
  Challenge: Build the Header Component
*/
export default function Header() {
  return (
    <header className="header">
      <div className="header--container">
        <img className="header--img" src={trollFace} alt="Troll Face" />
        <h5 className="header--h5">Meme Generator</h5>
      </div>
      <p className="header--p">React Course - Project 3</p>
    </header>
  );
}
