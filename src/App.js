import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/navbar"
import Card from "./components/card"
import Footer from "./components/footer"
import {BrowserRouter as Router} from "react-router-dom"
import Button from 'react-bootstrap/Button'; 
import Container from "./components/container"


class App extends Component {
  state = {
    fix: [
      "https://cdn.pixabay.com/photo/2016/11/23/14/41/action-figure-1853285__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/23/14/41/characters-1853286__340.jpg",
      "https://cdn.pixabay.com/photo/2016/12/13/04/22/toys-1903273__340.jpg","https://cdn.pixabay.com/photo/2019/03/31/11/05/toy-4092868__340.jpg","https://cdn.pixabay.com/photo/2015/02/10/23/20/lego-631850__340.jpg","https://cdn.pixabay.com/photo/2016/10/09/00/18/star-wars-1724901__340.jpg",
      "https://cdn.pixabay.com/photo/2016/01/02/16/39/darth-vader-1118454__340.png",
      "https://cdn.pixabay.com/photo/2017/02/22/23/04/wheelchair-2090900__340.jpg"
    ]
  }

  handleClick = () =>{
    alert("I have been clicked");
  }

  render = () => {
    return (
      <Router>
      <div className="App">
        <Navbar />      
        {this.state.fix.map(card => {
           return <Card image={card} click = {this.handleClick} />
        })}
        <Footer />
      </div>
      </Router>
    );
  }
  
}

export default App;
