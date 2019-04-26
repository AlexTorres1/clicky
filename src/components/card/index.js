import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Card, Container, Row, Col } from 'react-bootstrap';


export const ImageCard = (props) => (
  <Col lg={4} >
  <Card >
  <Card.Img variant="top" src={props.image} onClick = {props.onClick} />    
  </Card>
  </Col>
);



