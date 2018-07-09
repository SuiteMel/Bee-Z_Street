import React from "react";
<<<<<<< HEAD


// import "./Main.css";

const PlantCard = props => (
 
  <li className="collection-item avatar hoverable">
    <img src={props.image} alt="plantcard" className="circle" height="100" width="100"/>
    <span className="title">{props.commonName}</span> <small><em>{props.name}</em></small> <br />
    {props.notes}

    {props.children}
  </li>
 


=======
import { Link } from "react-router-dom";
import "./PlantCard.css";

const PlantCard = props => (
  <Link to={"/search/" + props._id}>
  <li className="collection-item avatar">
    <img src={props.image} alt="" className="circle" />
    <span className="title">{props.commonName} </span> <small><em>{props.name}</em></small> <br />
    <p>{props.notes}</p>
  </li>
  </Link>
>>>>>>> 760b59c0ab028601331a6a3844f917663c632707
);

export default PlantCard;