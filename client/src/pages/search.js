import React, { Component } from "react";
import "../css/home.css";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import PlantCard from "../components/PlantCard";
import { Input } from "react-materialize";
import "../css/search.css";



class Search extends Component {
  state = {
    plants: [],
    cName: "",
    soil: "",
    sun: "",
    water: "",
    habitat: ""
  }

  componentDidMount() {
    this.loadPlants();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  loadPlants = () => {
    API.getPlants()
      .then(res =>
        this.setState({ plants: res.data })
      ).catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchPlants({
      commonName: this.state.cName,
      soil: this.state.soil,
      sun: this.state.sun,
      water: this.state.water,
      habitat: this.state.habitat
    })
      .then(res =>
        this.setState({ plants: res.data })
      ).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Main>
          <h2 className="search">It's a Search</h2>
          <div className="row">
            <div className="col s3" id="searchCol">
              <form id="searchForm" className="row" onSubmit={this.handleFormSubmit}>
                <Input placeholder="Search by Name" s={12} name="cName" value={this.state.cName} onChange={this.handleInputChange} />
                
                {/* Soil selection */}
                <Input s={12} type="select" label="Select Soil Type" defaultValue="" name="soil" value={this.state.soil} onChange={this.handleInputChange}>
                  <option value="" >Choose your soil</option>
                  <option value="clay">Clay</option>
                  <option value="loam">Loam</option>
                  <option value="sand">Sand</option>
                </Input>

                {/* Sun selection */}
                <Input s={12} type="select" label="Select Sun Type" defaultValue="" name="sun" value={this.state.sun} onChange={this.handleInputChange}>
                  <option value="" >Choose your Sun</option>
                  <option value="full">Full</option>
                  <option value="part-sun">Part-Sun</option>
                  <option value="shade">Shade</option>
                </Input>

                {/* Water selection */}
                <Input s={12} type="select" label="Select Water Type" defaultValue="" name="water" value={this.state.water} onChange={this.handleInputChange}>
                  <option value="" >Choose your Water</option>
                  <option value="wet">Wet</option>
                  <option value="mesic">Mesic</option>
                  <option value="dry">Dry</option>
                </Input>

                {/* Habitat selection */}
                <Input s={12} type="select" label="Select Habitat" defaultValue="" name="habitat" value={this.state.habitat} onChange={this.handleInputChange}>
                  <option value="" >Choose your Habitat</option>
                  <option value="prairie">Prairie</option>
                  <option value="woodland edge">Woodland Edge</option>
                  <option value="wetland edge">Wetland Edge</option>
                </Input>

                <a className="btn"><i className="material-icons" onClick={this.handleFormSubmit}>search</i></a>
              </form>
            </div>

            <div className="col s9">
              {this.state.plants.length ? (
                <ul className="collection">
                  {this.state.plants.map(plant => (
                    <div>
                      <PlantCard
                        key={plant._id}
                        image={plant.images.box}
                        commonName={plant.commonName}
                        name={plant.name}
                        notes={plant.notes}
                      >
                        {/* {console.log(this.state.plants)} */}
                        <span key={plant._id}>
                          <Link to={"/search/" + plant._id}>
                            <span className="btn"><i className="material-icons">send</i></span>
                          </Link>
                        </span>
                      </PlantCard>
                    </div>
                  ))}
                </ul>
              ) : (
                  <h3 className="search">No Results to Display</h3>
                )}
            </div>
          </div>
        </Main>
      </div>)
  }
}

export default Search;