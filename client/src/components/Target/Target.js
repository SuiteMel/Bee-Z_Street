import React, { Component } from 'react';
import update from 'immutability-helper';
import Card from '../Plants';
import { DropTarget } from 'react-dnd';



class Container extends Component {

	constructor(props) {
		super(props);
		this.state = { cards: props.list };
	}


	pushCard(card) {
		this.setState(update(this.state, {
			cards: {
				$push: [card]
			}
		}));
	}


	//function that deletes the card from it's spot after it is moved away
	removeCard(index) {
		this.setState(update(this.state, {
			cards: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}
	//function that moves card
	moveCard(dragIndex, hoverIndex) {
		const { cards } = this.state;
		const dragCard = cards[dragIndex];


		this.setState(update(this.state, {
			cards: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard]
				]
			}
		}));
	}

	render() {
		const { cards } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const style = {

			width: "109px",
			height: "156px",
			cursor: 'move',
			border: '1px dashed gray'

		};

		const backgroundColor = isActive ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)';

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{cards.map((card, i) => {
					return (
						<div>
							<Card
								key={card.id}
								index={i}
								listId={this.props.id}
								card={card}
								removeCard={this.removeCard.bind(this)}
								moveCard={this.moveCard.bind(this)} />
						</div>

					)
				})}
			</div>
		);
	}
}

const cardTarget = {
	drop(props, monitor, component) {
		const { id } = props;
		const sourceObj = monitor.getItem();
		if (id !== sourceObj.listId) component.pushCard(sourceObj.card);
		return {
			listId: id
		};
	}
}

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);