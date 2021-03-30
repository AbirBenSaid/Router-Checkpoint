import React from 'react'
import './MovieCard.css'
import { Card, Button } from 'react-bootstrap'

function MovieCard({movie}) {
    return (
       <div className="CardStack">
        <Card className="Card" style={{ width: '18rem' }}>
        <Card.Img className="pic"variant="top" src={movie.posterUrl} />
      <Card.Body className="body">
          <Card.Title className="Title">{movie.title}</Card.Title>
          <Card.Text>
          {movie.description}
          </Card.Text>
          
          <Button variant="primary">{"⭐️".repeat(movie.rate)}</Button>
        </Card.Body>
      </Card> 
        </div>
    );
}
export default MovieCard



  