import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export const Navbar = () => (
    <div>
    <nav className="navbar navbar-expand-lg  ">       
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>            
          </li>
          <li className="">
            <a>Click an image to begin!</a>            
          </li>
          <li className="">
            <a>Score: 0 | Top Score: 0</a>            
          </li>
        </ul>      
    </nav>
    </div>
  );



