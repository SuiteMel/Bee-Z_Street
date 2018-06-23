import React from "react";
// import "./Main.css";

const PlantCard = props => (
  <li className="collection-item avatar">
    <img src={props.image} alt="" className="circle" />
      <span className="title">{props.commonName}</span> <small><em>{props.name}</em></small> <br />
      {props.notes}
      
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
      );
      
export default PlantCard;