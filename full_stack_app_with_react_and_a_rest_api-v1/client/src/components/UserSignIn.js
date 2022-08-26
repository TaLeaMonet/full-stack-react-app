import React,  { Component } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

class UserSignIn extends Component {

    state = {
      emailAddress: "",
      password: "",
      errors: []
    }
  
    render() {
      const {
        emailAddress, 
        password,
        errors
      } = this.state

      return (
        <div className="form--centered">
          <div className="grid-33 centered signin">
            <h1>Sign In</h1>
            <Form
              cancel={this.cancel}
              errors={errors}
              submit={this.submit}
              submitButtonText="Sign In"
              elements={() => (
                <React.Fragment>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="text"
                    value={emailAddress}
                    onChange={this.change}
                    placeholder="User Name" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.change}
                    placeholder="Password" />
                </React.Fragment>
              )}
              />
            <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
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
     const { emailAddress, password } = this.state;
     context.actions.signIn(emailAddress, password)
     .then(user => {
      if (user === undefined) {
        this.setState(() => {
            return { errors: [ 'Sign-in was unsuccessful' ] };
      }     
     )} else {
       this.props.history.push('/');
      console.log(`SUCCESS! ${emailAddress} is now signed in!`);
   }
     })
     .catch( err => {
      console.log(err);
      this.props.history.push('/error');
    })
   }
   
   cancel = () => {
     this.props.history.push('/');
     }
   }
    
  

  export default UserSignIn; 