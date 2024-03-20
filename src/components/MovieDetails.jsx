import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const API_KEY = 'cb837173';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${movieId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
