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
      {degreeAngle===40?(
            <div className="switch-hint"> 
              <h2>
                switch the channel,please
              </h2>
              <img className="switch-hint_arrow" src="../../../arrow.png" alt="arrow" />
              </div>
          ):''}
        <div className="TV">
          <img
            className="TV_box"
            alt="tv"
            src="../../../IMG_7690.png"
          ></img>
          {degreeAngle === 40 ? (
            <img
              className="TV_screen"
              alt="tv"
              src="../../../giphy.gif"
            ></img>
          ) : degreeAngle === 80 ? (
            <div className="TV_screen">
              <p>NAME: VIKTORYIA ZALOMNAVA</p>
              <p>AGE: 25</p>
              <p>FRONTEND REACT DEV</p>
              <p>LOCATION: SPAIN, VALENCIA</p>
              <p>EXPERIENCE:2 YEARS</p>
              <p>EDUCATION:MASTER OF PHARMACY</p>
              <div className="noise"></div>
            </div>
          ) : degreeAngle === 120 ? (
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
            src="../../..//tetris.gif"
          ></img>
            </div>
          ) : degreeAngle === 160 ? (
            <div className="TV_screen ">
            <img
              className="TV_screen mario"
              alt="tv"
              src="../../../mario.gif"
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
          ) : degreeAngle === 200 ? (
            <div>
                       <img
              className="TV_screen nicolson"
              alt="tv"
              src="../../../nicolson.gif"
            ></img>
            </div>
          ) : degreeAngle === 240 ? (
            <div className="TV_screen">
              <div className="noise"></div>
            </div>
          ) : (
            <div >
              <img
                className="TV_screen pongCats"
                alt="tv"
                src="../../../pongCats.gif"
              ></img>
            </div>
          )}
          <img
            id="switch"
            className="TV_switch"
            onClick={() => handleSwitchClick()}
            alt="tv"
            src="../../../IMG_7651.png"
          ></img>
        </div>
      </div>
    </>
  );
}
