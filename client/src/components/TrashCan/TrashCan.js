
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import "./TrashCan.css";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    card: monitor.getItem(),
  }
}

class TrashCan extends Component {
  render() {
    const { connectDropTarget, hovered} = this.props;
    const backgroundColor = hovered ? 'lightgreen' : 'purple';

    return connectDropTarget(
      <div className="TrashCan" id={1} style={{ background: backgroundColor }}>
        Trash Can
      </div>
    );
  }
}

export default DropTarget("CARD", {}, collect)(TrashCan);