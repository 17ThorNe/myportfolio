import React, { useState } from "react";
import "./Home.css";

function HomePage() {
  const [text, setText] = useState("");
  function btnDownloadMyCV() {
    setText("Prank GitHub Test");
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
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Contac me</a>
          </li>
        </ul>
        <button onClick={btnDownloadMyCV}>Download CV</button>
      </div>
      <h2 className="showTextHere">{text}</h2>
    </section>
  );
}

export default HomePage;
