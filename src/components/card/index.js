import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Card = (props) => (
  <div className="card">
    <div className="img-container">
      <img alt="" src={props.image} onClick = {props.click}/>
    </div>
  </div>
);

export default Card;