import React from "react";
import "../css/contact.css";
import Main from "../components/Main";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <div>
    <Main className="contactMain contact">
      <div className="container">
        <div className="row">
          <div className="col s6">
            <ContactForm />
          </div>
          <div className="col s6">
            <h1 className="contactHead">We want to hear from you!</h1>

            <p className="contact">
              Bee-Z Street gardeners across the country are beautifying their
              yards and gardens and helping vital bee populations.
            </p>

            <p className="contact">
              Bee-Z Street gardeners across the country are beautifying their
              yards and gardens and helping vital bee populations.
            </p>

            <p className="contact">
              Share your tips, tricks and successes, and we'll include them in
              our future garden showcase!
            </p>
          </div>
        </div>
      </div>
    </Main>
  </div>
);

export default Contact;
