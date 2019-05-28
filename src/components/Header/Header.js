import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header" >
  
  <div className="title">{props.children}</div>
 
  <div className="scores" > Current Score: {props.score}  |  Highest Score: {props.win} </div>
  

  </div>
)

export default Header;