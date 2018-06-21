import React, { Component } from "react";
import "../css/garden.css";
import Plants from "../components/Plants";
import Target from "../components/Target";
import Main from "../components/Main";
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext } from 'react-dnd'


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
      <Main>
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
      </Main>
  );
  }
}

  export default DragDropContext(HTML5Backend)(Garden);