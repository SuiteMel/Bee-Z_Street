import React, { Component } from "react";
import Main from "../components/Main";
import API from "../utils/API";
// import { Col, Row, } from 'react-materialize';
import "../css/plantInfo.css";

class PlantInfo extends Component {
  state = {
    plant: {
      flowering: [],
      sun: [],
      soil: [],
      water: [],
      images: {},
      insects: [{
        insect: "",
        image: ""
      }]
    }
  }

  componentDidMount() {
    API.getPlant(this.props.match.params.id)
      .then(res => this.setState({ plant: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const p = this.state.plant;

    return (
      <div>
        <Main className="plantMain">    
          <div className="container">  
              <div className="row">
              <div className="col l12 m12 s12 plantBorder">
              <h1 className="plantHead">{p.commonName}</h1>
              <p className="botanical">{p.name}</p>
              </div>
                <div className="col l6 m6 s6">
                  <img className="responsive-img plantImage" src={p.images.box} alt={p.commonName} />
                    <h3 className="plantSubHead">Planting Specs</h3>
                    <p className="plant">Height: {p.height}</p>
                    <p className="plant">Spacing: {p.spacing}</p>
                    <p className="plant">{p.notes}</p>
                </div>
                <div className="col l6 m6 s6">

                    <p className="plant">Habitat</p>                
                    <p className="indent">{p.habitat}</p>
                    
                    <p className="plant">Blooms in</p>                
                    <ul>
                      {p.flowering.map(i => (
                        <li className="plant">{i}</li>
                      ))}
                    </ul>
                    
                    <p className="plant">Required sun</p>                
                    <ul>
                      {p.sun.map(i => (
                        <li className="plant">{i}</li>
                      ))}
                    </ul>
                    
                    <p className="plant">Required soil</p>                
                    <ul>
                      {p.soil.map(i => (
                        <li className="plant">{i}</li>
                      ))}
                    </ul>
                    
                    <p className="plant">Required water</p>                
                    <ul>
                      {p.water.map(i => (
                        <li className="plant">{i}</li>
                      ))}
                    </ul>
                    <p className="plant">Common pollinators</p>                

                    {p.insects.map(i => (
                      <ul>
                        <li className="insect">{i.insect}</li>
                        <li className="imageUrl">{i.image}</li>
                      </ul>
                      ))}
                </div>
              </div>
            </div>
        </Main>
      </div>
    );
  }
}
export default PlantInfo;