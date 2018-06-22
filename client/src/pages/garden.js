import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../components/Target';
import "../css/garden.css";
import Main from "../components/Main";

class Garden extends Component {

	render() {
		const style = {
      display: "flex",
			justifyContent: "space-around",
			paddingTop: "20px"
		}

		const listOne = [
			{ id: 1, text: "🌱" },
			{ id: 2, text: "🌿" },
      { id: 3, text: "🌵" },
      { id: 4, text: "🍀" },
			{ id: 5, text: "🌾" },
      { id: 6, text: "🌷" },
      { id: 7, text: "🌻" },
			{ id: 8, text: "🌺" },
			{ id: 9, text: "🍄" }
		];

		const listTwo = [];
		const listThree = [];

		return (
      <Main>
			<div className = "gardenMain" style={{...style}}>
				<Container id={1} className="plantContainer" list={listOne} />
				<Container id={2} className="dirtGarden" list={listTwo} />
				<Container id={3} className="grassGarden" list={listThree} />
			</div>
      </Main>
		);
	}
}

export default DragDropContext(HTML5Backend)(Garden);
