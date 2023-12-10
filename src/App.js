import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import ChoicePage from "./components/ChoicePage/ChoicePage";
import InfoPage from "./components/InfoPage/InfoPage";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/entertainment" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
