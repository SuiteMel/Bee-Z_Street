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
	  <img src={plant.images.proportional} id={2} alt = "plants" height="50px" width = "50px"class="circle"></img>
	  </div>
	))}
	</div>
  ) : (
	<h3>No Results to Display</h3>
  )}
 


				<div class="garden row ">
					<div class=" col s1 ">

					<Container id={1} list={listOne} />
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						
						
						
						

						
					</div>
					<div class=" col s1">

						
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />
						

					</div>
					<div class="garden col s1">

						
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />
						
					</div>
					<div class="garden col s1">

						
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />
						

					</div>
					<div class="garden col s1">
						
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />
						

					</div>
					<div class="garden col s1">
						
						<Container id={2} list={listTwo} />
						<Container id={3} list={listThree} />
						<Container id={4} list={listFour} />
						<Container id={4} list={listFour} />
						<Container id={5} list={listFive} />
						<Container id={6} list={listSix} />
						<Container id={7} list={listSeven} />
						<Container id={8} list={listEight} />
						
					</div>

						<div class=" col s1">

						
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />
<Container id={5} list={listFive} />
<Container id={6} list={listSix} />
<Container id={7} list={listSeven} />
<Container id={8} list={listEight} />


</div>

	<div class=" col s1">

						
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />
<Container id={5} list={listFive} />
<Container id={6} list={listSix} />
<Container id={7} list={listSeven} />
<Container id={8} list={listEight} />


</div>

	<div class=" col s1">

						
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />
<Container id={5} list={listFive} />
<Container id={6} list={listSix} />
<Container id={7} list={listSeven} />
<Container id={8} list={listEight} />


</div>

	<div class=" col s1">

						
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
