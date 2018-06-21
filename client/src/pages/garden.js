import React, { Component } from "react";
import "../css/home.css";
<<<<<<< HEAD
import Wrapper from "../components/Wrapper";

const Garden = () => (
  <div>
    <Wrapper>
    <h2>My Beautiful Garden</h2>
    </Wrapper>
  </div>

);
=======
import Plants from "../components/Plants";
import Target from "../components/Target";
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext } from 'react-dnd'

>>>>>>> ac5730471bb27fe1d5ea81bc11a14ec34f5a9cea


class Garden extends Component {
  state = {
    plants: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ],
  }

  deletePlant= (id) => {
    this.setState(prevState => {
      let plants = prevState.plants;
      const index = plants.findIndex(plants => plants.id === id);
      plants.splice(index, 1);
      return { plants };
    });
  }

  render() {
    return (
      <div className="Garden">
      <h1 className="Garden-title">Welcome To Your Garden!</h1>
      <div className="plant-container">
        {this.state.plants.map((plants, index) => (
          <Plants key={plants.id} plants={plants} handleDrop={(id) =>
            this.deletePlant(id)}/>
        ))}
      </div>

      <Target />
      </div>
  );
  }
}

  export default DragDropContext(HTML5Backend)(Garden);