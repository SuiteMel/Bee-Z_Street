import React from "react";
import "../css/contact.css";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <div>
    <Navbar />
  <Main className="contactMain">
    <div className="container">
      <div className="row">
        <div className="col s6">
          <ContactForm />

        </div>
        <div className="col s6">
          <h1 className="contactHead">We want to hear from you!</h1>

          <p className="contact">Bee-Z Street gardeners across the country are beautifying their 
            yards and gardens and helping vital bee populations.</p> 
            
          <p className="contact">Send us pictures of your successes, and we'll include them in our 
            future garden showcase!
          </p>
        </div>
      </div>
    </div>
  </Main>
  </div>
);

export default Contact;