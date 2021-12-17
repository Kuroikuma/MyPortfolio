import "./home.style.css";
import React, { useState } from "react";
import GitHub from "../../../Assets/github.png";
import Facebook from "../../../Assets/facebook.png";
import LinkedIn from "../../../Assets/linkedin.png";
export const Home = () => {
  const [height, setHeight] = useState(window.innerHeight);

  const ScrollChange = (event) => {
    let { name } = event.target;
    switch (name) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "Skills":
        window.scrollTo({ top: height, behavior: "smooth" });
        break;
      case "Proyect":
        window.scrollTo({ top: height * 2, behavior: "smooth" });
        break;
      case "Contact":
        window.scrollTo({ top: height * 3, behavior: "smooth" });
        break;

      default:
        break;
    }
  };
  return (
    <div className="HomeContainer">
      <div className="HomeContainer__NavBar">
        <div className="HomeContainer__NavBar__Rigth">
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Home" onClick={ScrollChange}>
              Home
            </button>
          </div>
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Skills" onClick={ScrollChange}>
              Skills
            </button>
          </div>
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Proyect" onClick={ScrollChange}>
              Proyect
            </button>
          </div>
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Contact" onClick={ScrollChange}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="HomeContainer__Image"></div>
      <div className="HomeContainer__Info"></div>
      <div className="HomeContainer__Info__Contact">
        <div className="HomeContainer__Info__Contact__item HomeContainer__Info__Contact__LinkedIn">
          <img
            className="HomeContainer__Info__Contact__img"
            src={LinkedIn}
            alt="LinkedIn"
          />
        </div>
        <div className="HomeContainer__Info__Contact__item  HomeContainer__Info__Contact__Facebook">
          <img
            className="HomeContainer__Info__Contact__img"
            src={Facebook}
            alt="Facebook"
          />
        </div>
        <div className="HomeContainer__Info__Contact__item  HomeContainer__Info__Contact__GitHub">
          <img
            className="HomeContainer__Info__Contact__img"
            src={GitHub}
            alt="githud"
          />
        </div>
      </div>
      <div className="HomeContainer__Circle"></div>
    </div>
  );
};
