import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function HomePage() {
  const navigate = useNavigate();
  const navigateAboutme = useNavigate();

  function changeToSkill(e) {
    e.preventDefault();
    navigate("/skill");
  }
  function changeToAboutme(e) {
    e.preventDefault();
    navigateAboutme("/Aboutme.js");
  }

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
            <a href="#">Contact me</a>
          </li>
        </ul>
        <button>Download CV</button>
      </div>
    </section>
  );
}

export default HomePage;
