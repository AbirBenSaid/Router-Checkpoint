import React from 'react'
import './MovieCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    return (
       <div className="CardStack">
        <Card className="Card" style={{ width: '18rem' }}>
        <Card.Img className="pic"variant="top" src={movie.posterUrl} />
      <Card.Body className="body">
          <Card.Title className="Title">{movie.title}</Card.Title>
          <Card.Text>
          {movie.description}
          {"⭐️".repeat(movie.rate)}
          </Card.Text>
          <Link to={`/trailer/${movie.id}`}>
          <Button variant="primary"> More </Button>
          </Link>
        </Card.Body>
      </Card> 
        </div>
    );
}
export default MovieCard



  