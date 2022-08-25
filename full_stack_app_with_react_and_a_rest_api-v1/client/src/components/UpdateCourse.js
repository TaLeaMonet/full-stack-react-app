import React, { Component } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

class UpdateCourse extends Component {

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
      return(
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Create Course</h1>
            <Form 
              cancel={this.cancel}
              errors={errors}
              submit={this.submit}
              submitButtonText="Update Course"
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
      )
    }
  }

  export default UpdateCourse; 