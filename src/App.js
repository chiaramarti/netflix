import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
