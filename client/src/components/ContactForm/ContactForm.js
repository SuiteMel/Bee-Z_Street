import React, { Component } from "react";
require ('./ContactForm.css');

class ContactForm extends Component {
  state = {
    subject: "",
    body: "",
    image: ""
  };

  render() {
    return (
    <div>
      <h1 className="contact">Bee-friendly gardening is a breeze!</h1>
      <h2 className="contact">Have a question? Let us help!</h2>
    <form className="input-field col s9" action="mailto:samanthamccallfp18@gmail.com" method="post" enctype="text/plain">
    <h3 className="contactForm contact">Topic</h3>
              <input 
              className="contactForm"              
              type="text" 
              value={this.state.subject.text}
              onChange={this.handleInputChange}
              name="subject"
              placeholder="Example: Plant identification"
              />
        {/* new field */}
        <h3 className="col s12 contact">Post your question</h3>
              <textarea
              value={this.state.body.text}
              onChange={this.handleInputChange}
              type="text"
              name="body"
              placeholder="If you're asking about a specific plant 
              and you have a picture, upload it below."
              />
        {/* new field */}
        <h3 className="input-field col s12 contact">Select a file (.pdf, .jpg, .png, or .gif):</h3> 
              <input
              className="contactForm"              
              type="file"
              onChange={this.handleInputChange}
              name="image"
              />
        {/* new field */}
              <button
                className="btn waves-effect waves-light #f9a825 yellow darken-3 contactButton" 
                name="action"
                type="submit"
                value="Submit"
                onClick={this.handleFormSubmit}
                >
                Submit your question
              </button>
      </form>
  </div>
    )}
  };
export default ContactForm;