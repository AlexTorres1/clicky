import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./style.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { tsPropertySignature } from "@babel/types";



export const ImageContainer = props => (
  <Container>
    <Row>      
      {props.children}      
    </Row>
  </Container>
);


