import React from "react";
// import "./Main.css";

const PlantCard = props => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{props.commonName}</span>
          <p>This is some text</p>
        </div>
      </div>
    </div>
  </div>
);

export default PlantCard;