import React from "react";
import { Link } from "react-router-dom";
import "./PlantCard.css";

const PlantCard = props => (
  <Link to={"/search/" + props._id}>
    <li className="collection-item avatar">
      <img src={props.image} alt="" className="circle" />
      <span className="title">{props.commonName} </span>{" "}
      <small>
        <em>{props.name}</em>
      </small>{" "}
      <br />
      <p>{props.notes}</p>
    </li>
  </Link>
);

export default PlantCard;
