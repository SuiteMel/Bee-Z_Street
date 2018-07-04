import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../components/Target';
import "../css/garden.css";
import API from "../utils/API";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

import {Col, Row} from 'react-materialize';


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
			{ id: 1, text: "list1", url: "./images/anemone_235.png", name: 'anemone' },
			{ id: 1, text: "list1", url: "./images/borage_235.png", name: 'borage' },
			{ id: 1, text: "list1", url: "./images/butterfly_milkweed_250.png", name: 'butterfly milkweed' },
			{ id: 1, text: "list1", url: "./images/coneflowers_235.png", name: 'coneflowers' },
			{ id: 1, text: "list1", url: "./images/large_leafed_aster_240.png", name: 'large-leafed aster' },
			{ id: 1, text: "list1", url: "./images/lavender_157.png", name: 'lavender' },
			{ id: 1, text: "list1", url: "./images/prairie_phlox_80.png", name: 'prairie phlox' },
			{ id: 1, text: "list1", url: "./images/rattlesnake_master_252.png", name: 'rattlesnake master' },
			{ id: 1, text: "list1", url: "./images/sage_250.png", name: 'sage' },
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
		

		return (
			<div>

				<Main className="gardenMain">

					
					<h1 className="white-text center-align"> Design Your Garden!</h1>
					<h4 className="white-text center-align">Drag and drop the plants to design your own garden</h4>
					<h4 className="white-text center-align">Drag horizontally to delete a plant</h4>
					<div className=" container left header ">
					
					<Row>
					<Col s={1} className='grid-example'>

						<Container className="header vertical-align " id={1} list={listOne} />
						</Col>
					</Row>
				

					</div>


					<Row>
					<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />
</Col>

						<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>
<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>

<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>

<Col s={1} className='grid-example'>


<Container id={100} list={listTwo} />
<Container id={2} list={listTwo} />
<Container id={3} list={listThree} />
<Container id={4} list={listFour} />
<Container id={4} list={listFour} />

</Col>


					</Row>


				</Main>
			</div>
		)
	};
};

export default DragDropContext(HTML5Backend)(Garden);