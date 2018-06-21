import React, { Component } from "react";
import { DropTarget } from 'react-dnd';

import "./Target.css";

function collect(connect, monitor) {
return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    plants: monitor.getItem(),
}

}


class Target extends Component {
  render() {
      const {connectDropTarget, hovered, plants} = this.props;
      const backgroundColor = hovered ? 'lightgreen' : 'white';
    
    return connectDropTarget(
        <div className="target" style={{ background: backgroundColor}}>
        Target
        </div>

    )
    
    //  return (
      //  <div className="target">
        //Target
        //</div>
    //);
}
}

export default DropTarget('plants', {}, collect)(Target);