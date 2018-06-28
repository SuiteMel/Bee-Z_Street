import React from "react";
import Modal from "../Modal";
// import "./Main.css";

const PlantCard = props => (
  <li className="collection-item avatar" id={props.id}>
    <img src={props.image} alt="" className="circle" />
    <span className="title">{props.commonName}</span> <small><em>{props.name}</em></small> <br />
    {props.notes}

    <a href="#modal1" className="secondary-content waves-effect waves-light btn modal-trigger" onClick={props.onClick}><i className="material-icons">grade</i></a>

    <Modal 
      show={props.show}
      onClose={props.onClose}
      image={props.image}
      commonName={props.commonName}
      notes={props.notes}
    />
  </li>


);

export default PlantCard;