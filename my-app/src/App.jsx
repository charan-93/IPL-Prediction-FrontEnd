import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./teams";
import Prediction from "./Prediction";
import ScorePrediction from "./ScorePrediction";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "app-dark" : "app-light"}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/win-prediction" element={<Prediction />} />
          <Route path="/score-prediction" element={<ScorePrediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;