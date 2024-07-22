import React, { useState } from "react";
import "./Home.css";

function HomePage() {
  function changeToSkill() {}

  return (
    <section>
      <div className="contain_nav_bar">
        <p>THORNE</p>
        <ul>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#" onClick={changeToSkill}>
              Skill
            </a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Contac me</a>
          </li>
        </ul>
        <button>Download CV</button>
      </div>
    </section>
  );
}

export default HomePage;
