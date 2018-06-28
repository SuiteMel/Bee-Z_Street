import React from "react";
// import "./Main.css";

const PlantCard = props => (
  <li className="collection-item avatar" id={props.id}>
    <img src={props.image} alt="" className="circle" />
    <span className="title">{props.commonName}</span> <small><em>{props.name}</em></small> <br />
    {props.notes}

    <a href="#modal1" className="secondary-content waves-effect waves-light btn modal-trigger" onClick={props.onClick}><i className="material-icons">grade</i></a>


  </li>


);

export default PlantCard;