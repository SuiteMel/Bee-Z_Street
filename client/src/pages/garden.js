import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Target from '../components/Target';
import "../css/garden.css";
import Main from "../components/Main";
import { Col, Row, } from 'react-materialize';


class Garden extends Component {
	
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



		return (


			<Main className="gardenMain">



				<h1 className="white-text center-align garden-head"> Design Your Garden!</h1>
				<h4 className="white-text center-align">Drag and drop native Kansas plants to design your own garden</h4>
				<h4 className="white-text center-align">Drag twice to delete a plant</h4>
				<h6 className=" purple-text center-align"> &mdash; Not Touch Compatible &mdash; </h6>



				<Row className="dirtGarden">
					<Col className="header" s={12} m={12} l={12} xl={12} >

						<Target className="header vertical-align " id={1} list={listOne} />
					</Col>
				</Row>










				<Row>

					<Col s={6} m={6} l={2} xl={2} >


						<Target id={2} list={listTwo} />
						<Target id={2} list={listTwo} />
						<Target id={2} list={listThree} />
						<Target id={2} list={listFour} />


					</Col>


					<Col s={6} m={6} l={2} xl={2} className='grid-example'>


						<Target id={2} list={listTwo} />
						<Target id={2} list={listTwo} />
						<Target id={2} list={listThree} />
						<Target id={2} list={listFour} />


					</Col>
					<Col s={6} m={6} l={2} xl={2} className='grid-example'>


						<Target id={2} list={listTwo} />
						<Target id={2} list={listTwo} />
						<Target id={2} list={listThree} />
						<Target id={2} list={listFour} />


					</Col>
					<Col s={6} m={6} l={2} xl={2} className='grid-example'>


						<Target id={2} list={listTwo} />
						<Target id={2} list={listTwo} />
						<Target id={2} list={listThree} />
						<Target id={2} list={listFour} />

					</Col>
					<Col s={6} m={6} l={2} xl={2} className='grid-example'>


						<Target id={2} list={listTwo} />
						<Target id={2} list={listTwo} />
						<Target id={2} list={listThree} />
						<Target id={2} list={listFour} />


					</Col>
					<Col s={6} m={6} l={2} xl={2} className='grid-example'>


						<Target id={2} list={listTwo} />
						<Target id={2} list={listTwo} />
						<Target id={2} list={listThree} />
						<Target id={2} list={listFour} />


					</Col>



				</Row>


			</Main>

		)
	};
};

export default DragDropContext(HTML5Backend)(Garden);