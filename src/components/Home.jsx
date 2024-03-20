import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MovieCarousel from './MovieCarousel';
import { Container } from 'react-bootstrap';

const API_KEY = 'cb837173';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=action`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.Search.slice(0, 10)); // Mostra solo i primi 10 film
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <Container>
        <MovieCarousel title="Action Movies" movies={movies} />
      </Container>
    </div>
  );
};

export default Home;

