import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import NavigationBar from "./components/Navbar";
import Navbar_02 from "./components/Navbar_02";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Navbar_02 />
        <Home />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/tv-shows" element={<TVShows />} /> */}
          {/* <Route path="/movie-details/:movieId" element={<MovieDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
