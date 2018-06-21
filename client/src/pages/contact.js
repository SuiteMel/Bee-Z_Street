import React, { Component } from "react";
import "../css/home.css";
import { Button, Input, TextArea } from "../components/Form";
import Main from "../components/Main";

class Contact extends Component {
  state = {
    subject: "",
    body: "",
    image: ""
  };

  render() {
    return (
    <Main>
      
    <form class="form" action="mailto:someone@example.com" method="post" enctype="text/plain">
    <h1>Bee-friendly gardening is a breeze!</h1>
    <h2>Have a question? Let us help!</h2>
    <h3>Subject</h3>
    <div class="row">
    <div class="col s12">
      <div class="row">
        <div className="input-field col s3 black-text">
          {/* <i class="material-icons prefix">textsms</i> */}
          <input 
          type="text" 
          className="black-text"
          value={this.state.subject.text}
          onChange={this.handleInputChange}
          name="subject"
          placeholder="Ex.: Plant identification"
          />
        </div>
      </div>
    </div>
    {/* new field */}
    <h3>Post your question</h3>
    <div class="col s12">
      <div class="row">
        <div className="input-field col s3 black-text">
          {/* <i class="material-icons prefix">textsms</i> */}
          <TextArea 
          value={this.state.body.text}
          onChange={this.handleInputChange}
          type="text"
          class="black-text" 
          name="body"
          placeholder="Leave your message here. If you're asking about a specific plant 
          and you have a picture, upload it below."
          />
        </div>
      </div>
    </div>
    {/* new field */}
    <h3>Select a file (.pdf, .jpg .png or .gif):</h3> 
    <div class="col s12">
      <div class="row">
        <div className="input-field col s3 black-text">
          {/* <i class="material-icons prefix">textsms</i> */}
          <Input
        type="file"
        onChange={this.handleInputChange}
        name="image"
      />
        </div>
      </div>
    </div>
        {/* new field */}
    <div class="col s12">
      <div class="row">
        <div className="input-field col s3 black-text">
          {/* <i class="material-icons prefix">textsms</i> */}
          <Button
            class="btn waves-effect waves-light #f9a825 yellow darken-3" 
            name="action"
            type="submit"
            value="Submit"
            onClick={this.handleFormSubmit}
          >
              Submit
          </Button>
        </div>
      </div>
    </div>
  </div>
</form>
</Main>
    )};
  };

export default Contact;