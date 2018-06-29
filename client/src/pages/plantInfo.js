import React, { Component } from "react";
import Main from "../components/Main";
import API from "../utils/API";

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
    // console.log("string render");
    // console.log(p);

    return (
      <Main>
        It's the Details!
          <h1>{p.commonName}</h1>
        <p>{p.name}</p>
        <img src={p.images.box} alt={p.commonName} />
        <p>Height: {p.height}</p>
        <p>Spacing: {p.spacing}</p>
        <p>{p.notes}</p>
        <p>Habitat: {p.habitat}</p>
        <ul>
          {p.flowering.map(i => (
            <li>{i}</li>
          ))}
        </ul>
        
        <ul>
          {p.sun.map(i => (
            <li>{i}</li>
          ))}
        </ul>

        <ul>
          {p.soil.map(i => (
            <li>{i}</li>
          ))}
        </ul>
          
        <ul>
          {p.water.map(i => (
            <li>{i}</li>
          ))}
        </ul>

        
          {p.insects.map(i => (
            <ul>
            <li>{i.insect}</li>
            <li>{i.image}</li>
            </ul>
          ))}
        

        {/* 

          {p.insects} */}

      </Main>
    );
  }
}

export default PlantInfo;