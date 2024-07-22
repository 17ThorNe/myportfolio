import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./component/React/Home";
import Skill from "./component/React/Skill";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
