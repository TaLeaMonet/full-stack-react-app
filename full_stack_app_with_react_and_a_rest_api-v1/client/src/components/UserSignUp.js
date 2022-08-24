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
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Sign Up</h1>
            <Form 
              cancel={this.cancel}
              errors={errors}
              submit={this.submit}
              submitButtonText="Sign Up"
              elements={() => (
                <React.Fragment>
                  <input 
                    id="firstName" 
                    name="firstName" 
                    type="text"
                    value={firstName} 
                    onChange={this.change}  />
                    <input 
                    id="lastName" 
                    name="lastName" 
                    type="text"
                    value={lastName} 
                    onChange={this.change} />
                  <input 
                    id="emailAddress" 
                    name="emailAddress" 
                    type="text"
                    value={emailAddress} 
                    onChange={this.change} />
                  <input 
                    id="password" 
                    name="password"
                    type="text"
                    value={password} 
                    onChange={this.change}  />
                </React.Fragment>
              )} />
            <p>
              Already have a user account? <Link to="/signin">Click here</Link> to sign in!
            </p>
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
      console.log(`${firstName} is successfully signed up and authenticated!`);
    }
    })
    .catch( err => { // handle rejected promises
      console.log(err);
      this.props.history.push('/error');
    });  
}

cancel = () => {
  this.props.history.push('/');
  }
}