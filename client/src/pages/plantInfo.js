import React, { Component } from "react";
import Main from "../components/Main";
import API from "../utils/API";
import "../css/plantInfo.css";
import { Row, Col, Card, CardTitle } from "react-materialize";
import Navigation from "../components/Navbar";
import axios from "axios";
//import logout from "../utils/logout";

class PlantInfo extends Component {
  state = {
    plant: {
      flowering: [],
      sun: [],
      soil: [],
      water: [],
      images: {},
      insects: [
        {
          insect: "",
          image: ""
        }
      ]
    },
    jwtToken: localStorage.getItem("jwtToken")
  };

  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    API.getPlant(this.props.match.params.id)
      .then(res => this.setState({ plant: res.data }))
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = event => {
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("beeZUser");
    this.props.history.push("/login");
  };

  render() {
    const p = this.state.plant;
    return (
      <div>
        {this.state.jwtToken ? (
          <div>
            <Navigation logout={this.logout} />
            <Main class="infoMain p-3">
              <Row>
                <Col s={12} m={5} className="white-text">
                  <p>
                    <span className="h2">{p.commonName}</span> <em>{p.name}</em>
                  </p>
                  <p className="center-align">
                    <img
                      className="circle responsive-img"
                      src={p.images.box}
                      alt={p.commonName}
                    />
                  </p>
                  <p>{p.notes}</p>
                </Col>

                <Col s={12} m={7}>
                  <Row>
                    <p className="h2 center-align white-text">
                      Planting Information
                    </p>
                    <Col s={12} m={6}>
                      <ul className="collection with-header">
                        <li className="collection-header #f9a825 yellow darken-3 white-text">
                          <h6>Growing Info</h6>
                        </li>
                        <li className="collection-item ">
                          Height: {p.height} in.
                        </li>
                        <li className="collection-item">
                          Spacing: {p.spacing} in.
                        </li>
                        <li className="collection-item">
                          Habitat: <span className="caps">{p.habitat}</span>
                        </li>
                      </ul>
                    </Col>

                    <Col s={12} m={6}>
                      <ul className="collection with-header">
                        <li className="collection-header #f9a825 yellow darken-3 white-text">
                          <h6>Flowering Months</h6>
                        </li>
                        {p.flowering.map(i => (
                          <li className="collection-item"> {i}</li>
                        ))}
                      </ul>
                    </Col>
                  </Row>

                  <Row>
                    <Col s={12} m={4}>
                      <ul className="collection with-header">
                        <li className="collection-header #f9a825 yellow darken-3 white-text">
                          <h6>Sun Exposure</h6>
                        </li>
                        {p.sun.map(i => (
                          <li className="collection-item">
                            <span className="caps">{i}</span>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    <Col s={12} m={4}>
                      <ul className="collection with-header">
                        <li className="collection-header #f9a825 yellow darken-3 white-text">
                          <h6>Soil Types</h6>
                        </li>
                        {p.soil.map(i => (
                          <li className="collection-item">
                            <span className="caps">{i}</span>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    <Col s={12} m={4}>
                      <ul className="collection with-header">
                        <li className="collection-header #f9a825 yellow darken-3 white-text">
                          <h6>Water Types</h6>
                        </li>
                        {p.water.map(i => (
                          <li className="collection-item">
                            <span className="caps">{i}</span>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <p className="h2 center-align white-text">Pollinators</p>
                {p.insects.map(i => (
                  <Col s={12} m={4}>
                    <Card left header={<CardTitle image={i.image} />}>
                      {i.insect}
                    </Card>
                  </Col>
                ))}
              </Row>
            </Main>
          </div>
        ) : (
          this.props.history.push("/login")
        )}
      </div>
    );
  }
}
export default PlantInfo;
