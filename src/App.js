import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/navbar"
import ImageCard from "./components/card"
import Footer from "./components/footer"
import {BrowserRouter as Router} from "react-router-dom"
import Button from 'react-bootstrap/Button'; 
import { ImageContainer } from "./components/container"
import cards from "./cards.json";


class App extends Component {
  state = {
    cards
  }

  handleClick = () => {
    alert("I have been clicked");
    console.log("clicked")
  }

  render = () => {
        
    return (
      <Router>
      <div className="App">
        <Navbar />   
        <ImageContainer>
          {this.state.cards.map(card => {
            return <ImageCard image={card.image} onClick = {this.handleClick} />
          })};
        </ImageContainer>
        
      </div>
      </Router>
    );
  }
  
}

export default App;
