import React from "react";
import { useNavigate } from "react-router-dom";
import "./Aboutme.css";

function Aboutme() {
  const navigate = useNavigate();

  function changeToHomePage(e) {
    e.preventDefault(); // Prevent the default link behavior
    navigate("/");
  }

  return (
    <section>
      <div className="contain_nav_bar">
        <p onClick={changeToHomePage}>THORNE</p>
        <ul>
          <li>
            <a href="./">About me</a>
          </li>
          <li>
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Contact me</a>
          </li>
        </ul>
        <button>Download CV</button>
      </div>
      <h1>Hello Aboutme here</h1>
    </section>
  );
}

export default Aboutme;
