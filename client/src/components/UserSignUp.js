import React, {Component } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
export default class UserSignUp extends Component {

 state = {
   firstName: "",
   lastName: "", 
   emailAddress: "",
   password: "",
   errors: [],
 }

  render() {
      const {
        firstName, 
        lastName, 
        emailAddress, 
        password,
        errors
      } = this.state

      return (
      <div className="form--centered">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign Up"
            elements={() => (
              <React.Fragment>
                 <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={this.change} />
                  <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.change}
                  />
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                  id="emailAddress"
                  name="emailAddress"
                  type="text"
                  value={emailAddress}
                  onChange={this.change}
                  />
                  <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  value={password}
                  onChange={this.change}
                   />
              </React.Fragment>
            )} />
          <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
        </div>
      </div>
    );








  }

 change = (e) => {
   const name = e.target.name; 
   const value = e.target.value; 

   this.setState(() => {
     return {
       [name]:value,
     }
   })
 } 

submit = () => {
  const { context } = this.props;

  const {
    firstName,
    lastName, 
    emailAddress,
    password,
  } = this.state; 
  const user = {
    firstName,
    lastName,
    emailAddress,
    password,
  };
  context.data.createUser(user)
  .then( errors => {
    if(errors.length) {
      this.setState({ errors });
    } else {
      context.actions.signIn(emailAddress, password)
      .then(() => {
        this.props.history.push('/');    
      })
    }
    })
}

cancel = () => {
  this.props.history.push('/');
  }
}