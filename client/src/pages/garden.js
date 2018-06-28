import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../components/Target';
import "../css/garden.css";
import API from "../utils/API";
import Main from "../components/Main";



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
			{ id: 1, text: "list1"},
		];

		const listTwo = [{ id: 2, text: "lavender" }];
		const listThree = [];
		const listFour = [];
		const listFive = [];
		const listSix = [];
		const listSeven = [];
		const listEight = [];
		
		

		





		return (
			<Main>
				<h1>Welcome To Your Garden!</h1>
				

{this.state.plants.length ? (
	<div>
	{this.state.plants.map(plant => (
	  <div>
	  <p>
	  {plant.commonName}
	  </p>
	  <img src={plant.images.proportional} id={2} alt = "plants" height="50px" width = "50px"className="circle"></img>
	  </div>
	))}
	</div>
  ) : (
	<h3>No Results to Display</h3>
  )}
 


				<div className="garden row ">
					<div className=" col s1 ">

					<Container id={1} list={listOne} />
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						
						
						
						

						
					</div>
					<div className=" col s1">

						
						<Container id={8} list={listTwo} />
						<Container id={9} list={listThree} />
						<Container id={10} list={listFour} />
						<Container id={11} list={listFour} />
						<Container id={12} list={listFive} />
						<Container id={13} list={listSix} />
						<Container id={14} list={listSeven} />
						<Container id={15} list={listEight} />
						

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
				)
			};
		};
		
		export default DragDropContext(HTML5Backend)(Garden);