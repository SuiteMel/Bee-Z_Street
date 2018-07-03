import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../components/Target';
import "../css/garden.css";
import API from "../utils/API";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import TrashCan from "../components/TrashCan";




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
const listOne = [
			{ id: 1, text: "list1", url: "./images/anemone_235.png" , name: 'anemone'},
			{ id: 1, text: "list1", url: "./images/borage_235.png", name: 'borage' },
			{ id: 1, text: "list1", url: "./images/butterfly_milkweed_250.png", name: 'butterfly milkweed' },
			{ id: 1, text: "list1", url: "./images/coneflowers_235.png", name: 'coneflowers' },
			{ id: 1, text: "list1", url: "./images/large_leafed_aster_240.png", name: 'large-leafed aster' },
			{ id: 1, text: "list1", url: "./images/lavender_157.png", name: 'lavender' },
			{ id: 1, text: "list1", url: "./images/prairie_phlox_80.png", name: 'prairie phlox' },
			{ id: 1, text: "list1", url: "./images/rattlesnake_master_252.png", name: 'rattlesnake master' },
			{ id: 1, text: "list1", url: "./images/sage_250.png", name: 'sage'},
			{ id: 1, text: "list1", url: "./images/swamp_milkweed_235.png", name: 'swamp milkweed' },
			{ id: 1, text: "list1", url: "./images/virginia_waterleaf_215.png", name: 'Virginia waterleaf' },
			{ id: 1, text: "list1", url: "./images/white_turtlehead_313.png", name: 'white turtlehead' },
			{ id: 1, text: "list1", url: "./images/wild_geranium_120.png", name: 'wild geranium' }
		];

		const listTwo = [];
		const listThree = [];
		const listFour = [];
		const listFive = [];
		const listSix = [];
		const listSeven = [];
		const listEight = [];

return (
			<div>	

				<Main className="gardenMain">
			<Navbar />
			
			<TrashCan id={1}/>
				<h1 className="white-text center-align"> Welcome To Your Garden!</h1>
				
					<div className=" container left header">

			<Container className ="header row" id={1} list={listOne} />
			
             
						
				
				</div>


				<div className="garden row">
					<div className="col s1 ">
					

						    <Container id={100} list={listTwo} />
							<Container id={2} list={listTwo} />
							<Container id={3} list={listThree} />
							<Container id={4} list={listFour} />
							<Container id={4} list={listFour} />
							<Container id={5} list={listFive} />
							<Container id={6} list={listSix} />
							<Container id={7} list={listSeven} />
						</div>

						<div className="col s1 ">
					

					<Container id={100} list={listTwo} />
					<Container id={2} list={listTwo} />
					<Container id={3} list={listThree} />
					<Container id={4} list={listFour} />
					<Container id={4} list={listFour} />
					<Container id={5} list={listFive} />
					<Container id={6} list={listSix} />
					<Container id={7} list={listSeven} />
				</div>
						<div className="garden col s1">
						<Container id={16} list={listTwo} />
						<Container id={17} list={listThree} />
						<Container id={18} list={listFour} />
						<Container id={19} list={listFour} />
						<Container id={20} list={listFive} />
						<Container id={21} list={listSix} />
						<Container id={22} list={listSeven} />
						<Container id={23} list={listEight} />
					</div>
					<div className="garden col s1">
						<Container id={24} list={listTwo} />
						<Container id={25} list={listThree} />
						<Container id={26} list={listFour} />
						<Container id={27} list={listFour} />
						<Container id={28} list={listFive} />
						<Container id={29} list={listSix} />
						<Container id={30} list={listSeven} />
						<Container id={31} list={listEight} />
					</div>
					<div className="garden col s1">
						<Container id={32} list={listTwo} />
						<Container id={33} list={listThree} />
						<Container id={34} list={listFour} />
						<Container id={35} list={listFour} />
						<Container id={36} list={listFive} />
						<Container id={37} list={listSix} />
						<Container id={38} list={listSeven} />
						<Container id={39} list={listEight} />
					</div>
					<div className="garden col s1">
						<Container id={40} list={listTwo} />
						<Container id={41} list={listThree} />
						<Container id={42} list={listFour} />
						<Container id={43} list={listFour} />
						<Container id={44} list={listFive} />
						<Container id={45} list={listSix} />
						<Container id={46} list={listSeven} />
						<Container id={47} list={listEight} />
					</div>
					<div className=" col s1">
						<Container id={48} list={listTwo} />
						<Container id={49} list={listThree} />
						<Container id={50} list={listFour} />
						<Container id={51} list={listFour} />
						<Container id={52} list={listFive} />
						<Container id={53} list={listSix} />
						<Container id={54} list={listSeven} />
						<Container id={55} list={listEight} />
					</div>
					<div className=" col s1">
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />
					</div>
					<div className=" col s1">
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />
					</div>
					<div className=" col s1">
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />



					</div>
				</div>
				

			</Main>
			</div>
				)
	};
};

export default DragDropContext(HTML5Backend)(Garden);
