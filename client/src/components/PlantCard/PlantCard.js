import React from "react";

// import "./Main.css";

const PlantCard = props => (
  <li className="collection-item avatar">
    <img src={props.image} alt="" className="circle" />
    <span className="title">{props.commonName}</span> <small><em>{props.name}</em></small> <br />
    {props.notes}

    {props.children}
  </li>
);

export default PlantCard;