import React from 'react'
import './Nav.css'
import ReactStars from 'react-stars';
import {Navbar, Nav, Button, Form, FormControl} from "react-bootstrap"





function MyNavbar({getRateSearch, getTitleSearch}) {
  const ratingChanged = (newRating) => {
    getRateSearch(newRating);
  };
    return (
      <Navbar bg="dark" variant="dark" style={{display:"flex",justifyContent:"space-evenly", background:"#ECECEC"}}>
    <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline className="InputArea" style={{display:"flex",justifyContent:"space-evenly"}}>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    half={false}
    />
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => getTitleSearch(e.target.value)} />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    
    );

  }
  
  
 export default MyNavbar;