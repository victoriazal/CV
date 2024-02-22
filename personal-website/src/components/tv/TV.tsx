import "./TV.scss";
import { useState } from "react";
export default function Tv() {
  const [degreeAngle, setDegreeAngle] = useState(40);
  function handleSwitchClick(): void {
    const switchElement = document.getElementById("switch");
    if (switchElement) {
      setDegreeAngle(degreeAngle + 40);
      switchElement.style.transform = `rotate(${degreeAngle}deg)`;
    }
  }
  return (
    <>
      <div className="container">
        <div className="TV">
          <img
            className="TV_box"
            alt="tv"
            src="../../../public/IMG_7690.png"
          ></img>
          {degreeAngle === 40 ? (
            <img
              className="TV_screen"
              alt="tv"
              src="../../../public/giphy.gif"
            ></img>
          ) : degreeAngle === 80 ? (
            <div className="TV_screen">
              <p>name: Viktoryia Zalomnava</p>
              <p>age: 25</p>
              <p>location: Spain, Valencia</p>
              <p>FRONTEND REACT DEV</p>
              <div className="noise"></div>
            </div>
          ) : degreeAngle === 120 ? (
            <img
              className="TV_screen nicolson"
              alt="tv"
              src="../../../public/nicolson.gif"
            ></img>
          ) : degreeAngle === 160 ? (
            <div className="TV_screen">
              <div className="noise"></div>
            </div>
          ) : degreeAngle === 200 ? (
            <div>
              <p className="TV_language">
                Languages:
                <br />
                English-C1
                <br /> Spanish-A2
                <br /> Russian-Native
              </p>
              <img
                className="TV_screen tetris"
                alt="tv"
                src="../../../public/tetris.gif"
              ></img>
            </div>
          ) : degreeAngle === 240 ? (
            <div className="TV_screen ">
              <img
                className="TV_screen mario"
                alt="tv"
                src="../../../public/mario.gif"
              ></img>
              <h5 className="marioText">My programming skills</h5>
              <ul>
                <li>HTML5/CSS/SASS</li>
                <li>JS/TS</li>
                <li>React / Redux </li>
                <li>React Native/React spring</li>
                <li>React Testing Library</li>
                <li>NestJS</li>
                <li>Git/swagger</li>
                <li>SQL/Prettier/Husky/Axious</li>
              </ul>
              <div className="noise"></div>
            </div>
          ) : (
            <div >
              <img
                className="TV_screen pongCats"
                alt="tv"
                src="../../../public/pongCats.gif"
              ></img>
            </div>
          )}
          <img
            id="switch"
            className="TV_switch"
            onClick={() => handleSwitchClick()}
            alt="tv"
            src="../../../public/IMG_7651.png"
          ></img>
        </div>
      </div>
    </>
  );
}
