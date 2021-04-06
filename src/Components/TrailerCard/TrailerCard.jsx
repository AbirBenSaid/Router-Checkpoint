import React from 'react'
import './TrailerCard.css'
import  {Card} from "react-bootstrap"
import { useParams } from 'react-router'



function TrailerCard ({movie} ) {
 let Id=useParams()


 console.log(typeof Id)
 console.log(Id)
    return (

<Card border="primary" style={{ width: '50%',textAlign:"center",  marginLeft: "auto", marginRight: "auto" }}>
    <Card.Header> {movie.find((element) => element.id === Number(Id.id)).type} Movie</Card.Header>
    <Card.Body>
        <div> {movie.find((element) => element.id === Number(Id.id)).trailer}</div>
      <Card.Title>{movie.find((element) => element.id === Number(Id.id)).title}</Card.Title>
      <Card.Text>
      {movie.find((element) => element.id === Number(Id.id)).description}
      </Card.Text>
    </Card.Body>
  </Card>
  
    )}
    export default TrailerCard