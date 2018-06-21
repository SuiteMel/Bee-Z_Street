import React, { Component } from "react";
import "./Plants.css";
import { DragSource } from 'react-dnd';

const plantsSource = {
    beginDrag(props) {
        return props.plants;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }


        return props.handleDrop(props.plants.id);
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Plants extends Component {
    render() {
        const { isDragging, connectDragSource, plants } = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(

            <div className="plants" style={{ opacity }}>
                <span>{plants.name}</span>
            </div>
        )
        // return (
        //   <div className="plants">
        // {this.props.plants.name}
        //</div>
        //);
    }
}

export default DragSource('plants', plantsSource, collect)(Plants);
