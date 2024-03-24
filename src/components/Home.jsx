import React, { useState, useEffect } from 'react';
import MovieCarousel from './MovieCarousel';
import { Container, Row, Col, Card } from 'react-bootstrap';

const API_KEY = 'cb837173';
const API_URL_ACTION = `http://www.omdbapi.com/?apikey=${API_KEY}&s=action&type=movie&genre=action`;
const API_URL_DRAMA = `http://www.omdbapi.com/?apikey=${API_KEY}&s=drama&type=movie&genre=drama`;
const API_URL_ROMANTIC = `http://www.omdbapi.com/?apikey=${API_KEY}&s=love&type=movie&genre=romantic`;

const Home = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [romanticMovies, setRomanticMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (url, setter) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setter(data.Search.slice(0, 6)); // Mostra solo le prime 6 card
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies(API_URL_ACTION, setActionMovies);
    fetchMovies(API_URL_DRAMA, setDramaMovies);
    fetchMovies(API_URL_ROMANTIC, setRomanticMovies);
  }, []);

  const renderMovieCards = (movies) => {
    return movies.map((movie) => (
      <Col key={movie.imdbID} xs={2} className="mb-4 h-100">
        <Card>
          <Card.Img variant="top" src={movie.Poster} className='h-100'/>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="bg-dark" style={{ color: '#fff'}}>
      <Container>
        <h2 className="pt-4 mb-3">Action Movies</h2>
        <Row>
          {renderMovieCards(actionMovies)}
        </Row>
        <h2 className="mt-4 mb-3">Drama Movies</h2>
        <Row>
          {renderMovieCards(dramaMovies)}
        </Row>
        <h2 className="mt-4 mb-3">Romantic Movies</h2>
        <Row>
          {renderMovieCards(romanticMovies)}
        </Row>
      </Container>
    </div>
  );
};

export default Home;


