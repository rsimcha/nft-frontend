import React from 'react';
import { Card, Button } from 'react-bootstrap';
import placeholder from '../img/placeholder1.png'; 

const Art = (props) => (
    <div>
       <Card style={{ width: 'fluid'}}>
  <Card.Img variant="top" src={placeholder} />
  <Card.Body>
    <Card.Title>Caption</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </div>
);

export default Art;