import React, { Component } from "react";
import "../css/home.css";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import PlantCard from "../components/PlantCard";
import SearchForm from "../components/SearchForm";
import "../css/search.css";

class Search extends Component {
  state = {
    plants: [],
    cName: ""
  }

  componentDidMount() {
    this.searchPlants();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // loadPlants = () => {
  //   API.getPlants()
  //     .then(res =>
  //       this.setState({ plants: res.data })
  //     ).catch(err => console.log(err));
  // };

  searchPlants = () => {
    API.searchPlants(this.state.cName)
      .then(res =>
        this.setState({ plants: res.data })
      ).catch(err => console.log(err));

  }

  render() {
    return (
      <Main>
        <h2>It's a Search</h2>
        <div className="row">
          <div className="col s3" id="searchCol">
            <SearchForm
              onClick={this.searchPlants}
              name="cName"
              value={this.state.cName}
              onChange={this.handleInputChange}
            />
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
                      <span key={plant._id}>
                        <Link to={"/search/" + plant._id}>
                          <span className="btn"><i className="material-icons">arrow_forward</i></span>
                        </Link>
                      </span>
                    </PlantCard>
                  </div>
                ))}
              </ul>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </div>
        </div>
      </Main>)
  }
}

export default Search;