import React, { Component } from "react";
import "../css/contact.css";
import { Button, Input, TextArea } from "../components/Form";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

class Contact extends Component {
  state = {
    subject: "",
    body: "",
    image: ""
  };

  render() {
    return (
    <div>
      <Navbar />
    <Main className = "contactMain">
    <form className="form border" action="mailto:samanthamccallfp18@gmail.com" method="post" enctype="text/plain">
    <h1>Bee-friendly gardening is a breeze!</h1>
    <h2>Have a question? Let us help!</h2>
    <p className="subhead">Subject</p>
    <div class="row">
    <div class="col s12">
      <div class="row">
        <div className="input-field col s3 black-text">
          {/* <i class="material-icons prefix">textsms</i> */}
          <Input 
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
    <p className="subhead">Post your question</p>
    <div class="col s12">
      <div class="row">
        <div className="input-field col s3 black-text">
          {/* <i class="material-icons prefix">textsms</i> */}
          <TextArea 
          value={this.state.body.text}
          onChange={this.handleInputChange}
          type="text"
          className="black-text" 
          name="body"
          placeholder="Leave your message here. If you're asking about a specific plant 
          and you have a picture, upload it below."
          />
        </div>
      </div>
    </div>
    {/* new field */}
    <p className="subhead">Select a file (.pdf, .jpg .png or .gif):</p> 
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
</div>
    )};
  };

export default Contact;