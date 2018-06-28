import React from "react";

const Modal = props => ({
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      margin: '0 auto',
      maxWidth: '1000px'
    };

    return (
      <div style={backdropStyle}>
        <div className="card" style={modalStyle}>
          {this.props.children}
          <div className="card-content">
            <span className="card-title">{props.commonName}</span>
            <img src={props.image} height="200px" className="circle left" alt={props.commonName} />

            <p>{props.notes}</p>
          </div>
          <div className="card-action">
            <a onClick={this.props.onClose}>This is a link</a>
          </div>
        </div>
      </div>
    );
  }
});

export default Modal;