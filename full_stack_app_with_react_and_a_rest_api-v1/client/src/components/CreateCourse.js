import React, {Component } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';


export default class CreateCourse extends React.PureComponent {

 state = {
   courseTitle: "",
   courseDescription: "", 
   estimatedTime: "",
   materialsNeeded: "",
   errors: [],
 }

  render() {
    const user = this.props
    const {
      courseTitle, 
      courseDescription, 
      estimatedTime, 
      materialsNeeded,
      errors
    } = this.state
      return (
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Create Course</h1>
            <Form 
              cancel={this.cancel}
              errors={errors}
              submit={this.submit}
              submitButtonText="Create Course"
              elements={() => (
                <React.Fragment>
                  <label htmlFor="coureTitle">Course Title</label>
                  <input 
                    id="courseTitle" 
                    name="courseTitle" 
                    type="text"
                    value={courseTitle} 
                    onChange={this.change}  />
                    <p>By {user.firstName}</p>
                    <label htmlFor="courseDescription">Course Description</label>
                    <input 
                    id="courseDescription" 
                    name="courseDescription" 
                    type="text"
                    value={courseDescription} 
                    onChange={this.change} />
                    <label htmlFor="estimatedTime">Estimated Time</label>
                  <input 
                    id="estimatedTime" 
                    name="estimatedTime" 
                    type="text"
                    value={estimatedTime} 
                    onChange={this.change} />
                    <label htmlFor="materialsNeeded">Materials Needed</label>
                  <input 
                    id="materialsNeeded" 
                    name="materialsNeeded"
                    type="text"
                    value={materialsNeeded} 
                    onChange={this.change}  />
                </React.Fragment>
              )} />
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
    .catch( err => { // handle rejected promises
      console.log(err);
      this.props.history.push('/error');
    });  
}

cancel = () => {
  this.props.history.push('/');
  }
}