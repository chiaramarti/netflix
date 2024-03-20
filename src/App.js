import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
