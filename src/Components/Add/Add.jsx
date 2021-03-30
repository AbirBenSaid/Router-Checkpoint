import React, {useState} from 'react'
import './Add.css'
import {Modal, Button, Form} from "react-bootstrap"



function Add({getNewMovie}) {
    const [newMovie, setNewMovie]= useState ({})

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
      getNewMovie(newMovie);
      handleClose()

    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie Details </Modal.Title>
          </Modal.Header>
          <Modal.Body className="inputAddMovie">
          <Form.Control type="text" placeholder="Enter Title" name="title" onChange={(e) => setNewMovie({...newMovie, title: e.target.value}) } />
          <Form.Control type="text" placeholder="Enter Description" name="description" onChange={(e) => setNewMovie({...newMovie, description: e.target.value }) }/>
          <Form.Control type="text" placeholder="Enter poster Url" name="posterUrl" onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value}) }/>
          <Form.Control type="text" placeholder="Enter Rate" name="rate" onChange={(e) => setNewMovie({...newMovie, rate: e.target.value}) }/>
          <Form.Control type="text" placeholder="Enter Type" name="type" onChange={(e) => setNewMovie({...newMovie, type: e.target.value}) }/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
    
    
   export default Add;