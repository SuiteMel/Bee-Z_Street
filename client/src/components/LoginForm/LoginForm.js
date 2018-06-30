require('./LoginForm.css');
var React = require('react');
var createReactClass = require('create-react-class');


var LoginForm = createReactClass({
  render: function(){
    return(
      <div className="input-field col s12 screen black-text">

      <form id="signup" onSubmit={this.handleSubmit}>
        <input className="col s12" type="email" placeholder="Email" required ref="email"/>  
        <input className="col s12" type="password" placeholder="Password" required ref="password" />
        <input className="btn waves-effect waves-light #f9a825 yellow darken-3 s2 home" type="submit" value="Submit" />
        </form>
        </div>

    );
  },

//  this function was used in demo -- I included it in case we could
//  use it to add name to database
  handleSubmit: function (e) {
    e.preventDefault();  
    this.props.onAdd(this.refs.email.value); 
    this.props.onAdd(this.refs.password.value); 

  }
});

module.exports = LoginForm;