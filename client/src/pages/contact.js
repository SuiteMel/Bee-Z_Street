import React, { Component } from "react";
import "../css/home.css";
import { Button, Input, TextArea } from "../components/Form";
import Wrapper from "../components/Wrapper";

class Contact extends Component {
  state = {
    subject: "",
    body: "",
    image: ""
  };

  render() {
    return (
    <div>

    <form class="form" action="mailto:someone@example.com" method="post" enctype="text/plain">
    <h1>Bee-friendly gardening is a breeze!</h1>
    <h2>Have a question? Let us help!</h2>
    <h3>Subject</h3>
      <Input
        type="text"
        value={this.state.subject.text}
        onChange={this.handleInputChange}
        name="subject"
        placeholder="Ex.: Plant identification"
      />
    <h3>Post your question</h3>

      <TextArea 
        value={this.state.body.text}
        onChange={this.handleInputChange}
        type="text"
        name="body"
        placeholder="Leave your message here. If you're asking about a specific plant 
        and you have a picture, upload it below."
      />
      <h3>Select a file (.pdf, .jpg .png or .gif):</h3> 
      <Input
        type="file"
        onChange={this.handleInputChange}
        name="image"
      />
      <Button
        type="submit"
        value="Submit"
        onClick={this.handleFormSubmit}
      >
        Submit
    </Button>
    </form>
</div >
    )};
  };

export default Contact;