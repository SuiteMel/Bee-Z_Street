import React, { Component } from 'react';
import "../css/home.css";
import { Form, Button } from "../components/Form";
import Wrapper from "../components/Wrapper";

class Contact extends Component {
  constructor (props){
    super(props)
  }
  state = {
    topic: ""
  }
  handleInputChange=(e) =>{
    console.log(e)
    this.setState({
      topic: e.target.value
    })
  }
  handleSubmit=() =>{
    console.log(this.state.topic)
    // axios.post(`/test`, { topic:this.state.message })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  //invoked to load component data
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Wrapper>
              <h2>Contact Bee-Z Street</h2>
              <Form 
                handleInputChange={this.handleInputChange}
                {...this.props}
                value={this.state.message}
              />
              <Button 
                className="submit" 
                onClick={this.handleSubmit}
              >
                Search
              </Button>          
        </Wrapper>
      </div>
    );
  }
}

export default Contact;