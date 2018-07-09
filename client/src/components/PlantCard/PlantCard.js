import React from "react";


// import "./Main.css";

const PlantCard = props => (
 
  <li className="collection-item avatar hoverable">
    <img src={props.image} alt="plantcard" className="circle" height="100" width="100"/>
    <span className="title">{props.commonName}</span> <small><em>{props.name}</em></small> <br />
    {props.notes}

    {props.children}
  </li>
 


);

export default PlantCard;