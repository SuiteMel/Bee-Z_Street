import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../components/Target';
import "../css/garden.css";
import API from "../utils/API";
import Main from "../components/Main";
import Navbar from "../components/Navbar";




class Garden extends Component {
	state = {
		plants: []
	  }
	  componentDidMount() {
		this.loadPlants();
	  }
	
	  loadPlants = () => {
		API.getPlants()
		  .then(res =>
			this.setState({ plants: res.data })
		  ).catch(err => console.log(err));
	  };	


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

		const listTwo = [{ id: 2, text: "lavender" }];
		const listThree = [];
		const listFour = [];
		const listFive = [];
		const listSix = [];
		const listSeven = [];
		const listEight = [];
		
		
		return (
			<div>
				<Navbar />
				<Main>
					<div className="gardenMain" style={{ ...style }}>
						<Container id={1} className="plantContainer" list={listOne} />
						<Container id={2} className="dirtGarden" list={listTwo} />
						<Container id={3} className="grassGarden" list={listThree} />
					</div>
				</Main>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(Garden);