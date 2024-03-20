import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCarousel = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Row xs={1} md={2} lg={3} xl={6} className="g-4">
        {movies.map(movie => (
          <Col key={movie.imdbID}>
            <Link to={`/movie-details/${movie.imdbID}`} className="text-decoration-none">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieCarousel;

