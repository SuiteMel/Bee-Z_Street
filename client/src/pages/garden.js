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
			background: '#3F250B'
			
		
		}

		const listOne = [
			{ id: 1, text: "🌱", src: this.props.src },
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
		const listFour = [];
		const listFive = [];
		const listSix = [];
		const listSeven = [];
		const listEight = [];
		const listNine = [];
		const listTen = [];
		const backgroundImage = 'url("../images/dirt.png")';
		const row = 'row, col s1';
		

		return (
   <Main>
		 <h1>Welcome To Your Garden!</h1>
			<div className = {{row}} style={{...style, backgroundImage}}>
				<Container id={1}  list={listOne} />
				<Container id={2}  list={listTwo} />
				<Container id={3}  list={listThree} />
				<Container id={4}  list={listFour} />
				<Container id={4}  list={listFour} />
				<Container id={5}  list={listFive} />
				<Container id={6} list={listSix} />
				<Container id={7}  list={listSeven} />
				<Container id={8}  list={listEight} />
				<Container id={9}  list={listNine} />
			</div>

			<div className = {{row}} style={{...style, backgroundImage}}>
				
				<Container id={2}  list={listTwo} />
				<Container id={3}  list={listThree} />
				<Container id={4}  list={listFour} />
				<Container id={4}  list={listFour} />
				<Container id={5}  list={listFive} />
				<Container id={6} list={listSix} />
				<Container id={7}  list={listSeven} />
				<Container id={8}  list={listEight} />
				<Container id={9}  list={listNine} />
				<Container id={9}  list={listTen} />
			</div>

			<div className = {{row}} style={{...style, backgroundImage}}>
				
				<Container id={2}  list={listTwo} />
				<Container id={3}  list={listThree} />
				<Container id={4}  list={listFour} />
				<Container id={4}  list={listFour} />
				<Container id={5}  list={listFive} />
				<Container id={6} list={listSix} />
				<Container id={7}  list={listSeven} />
				<Container id={8}  list={listEight} />
				<Container id={9}  list={listNine} />
				<Container id={9}  list={listTen} />
			</div>

			<div className = {{row}} style={{...style, backgroundImage}}>
			
				<Container id={2} list={listTwo} />
				<Container id={3} list={listThree} />
				<Container id={4} list={listFour} />
				<Container id={4} list={listFour} />
				<Container id={5} list={listFive} />
				<Container id={6} list={listSix} />
				<Container id={7} list={listSeven} />
				<Container id={8} list={listEight} />
				<Container id={9} list={listNine} />
				<Container id={9} list={listTen} />
			</div>

			<div className = {{row}} style={{...style, backgroundImage}}>
			
				<Container id={2} list={listTwo} />
				<Container id={3} list={listThree} />
				<Container id={4} list={listFour} />
				<Container id={4} list={listFour} />
				<Container id={5} list={listFive} />
				<Container id={6} list={listSix} />
				<Container id={7} list={listSeven} />
				<Container id={8} list={listEight} />
				<Container id={9} list={listNine} />
				<Container id={9} list={listTen} />
			</div>
			</Main>
     
		);
	}
}

export default DragDropContext(HTML5Backend)(Garden);
