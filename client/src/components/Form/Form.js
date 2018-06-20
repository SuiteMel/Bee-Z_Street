import React from "react";



const Form = props => {

  return (
    <form>
    <label htmlFor="topic">Message</label>
    <input 
      placeholder="message title"
      type="text"
      className="form-input"
      id="message"
      required
      onChange={ props.handleInputChange }
      value={props.value}
    ></input>
    </form>
  )
}

export default Form;