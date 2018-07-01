require('./SignupForm.css');
var React = require('react');
var createReactClass = require('create-react-class');


var SignupForm = createReactClass({
  render: function(){
    return(
      <div className="input-field col s12 screen black-text">

      <form id="signup" onSubmit={this.handleSubmit}>
        <input className="col s12" type="text" placeholder="First Name" required ref="firstName"/>
        <input className="col s12" type="text" placeholder="Last Name" required ref="lastName"/>
        <input className="col s12" type="password" placeholder="Password" required ref="password"/>
        <input className="col s12" type="email" placeholder="Email" required ref="email"/>
        <button class="btn waves-effect waves-light #f9a825 yellow darken-3" type="submit" name="action">Submit</button>
        </form>
        </div>

    );
  },

//  this function was used in demo -- I included it in case we could
//  use it to add name to database
  handleSubmit: function (e) {
    e.preventDefault();  
    this.props.onAdd(this.refs.firstName.value);  
    this.props.onAdd(this.refs.lastName.value); 
    this.props.onAdd(this.refs.password.value); 
    this.props.onAdd(this.refs.email.value); 
  }
});

module.exports = SignupForm;