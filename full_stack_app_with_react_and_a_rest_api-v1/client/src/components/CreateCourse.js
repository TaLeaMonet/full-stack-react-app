import React from 'react';
import Form from './Form';

export default class CreateCourse extends React.PureComponent {
  
 state = {
  title: "",
   description: "", 
   estimatedTime: "",
   materialsNeeded: "",
   errors: [],
 }

  render() {

    const {
    title, 
      description, 
      estimatedTime, 
      materialsNeeded,
      errors
    } = this.state
      return (
        <main>
          <div className="wrap">
            <h1>Create Course</h1>
            <Form 
              cancel={this.cancel}
              errors={errors}
              submit={this.submit}
              submitButtonText="Create Course"
              elements={() => (
                <React.Fragment>
                  <div className='main--flex'>
                   <div>
                  <label htmlFor="coureTitle">Course Title</label>
                  <input 
                    id="title" 
                    name="title" 
                    type="text"
                    value={title} 
                    onChange={this.change}  />
                    <p>By</p>
                    <label htmlFor="description">Course Description</label>
                    <textarea  
                    id="description" 
                    name="description" 
                    type="text"
                    value={description} 
                    onChange={this.change} />
                    </div>
                    <div>
                    <label htmlFor="estimatedTime">Estimated Time</label>
                  <input 
                    id="estimatedTime" 
                    name="estimatedTime" 
                    type="text"
                    value={estimatedTime} 
                    onChange={this.change} />
                    <label htmlFor="materialsNeeded">Materials Needed</label>
                  <textarea 
                    id="materialsNeeded" 
                    name="materialsNeeded"
                    type="text"
                    value={materialsNeeded} 
                    onChange={this.change}  />
                    </div>
                    </div>
                </React.Fragment>
              )} />
          </div>
          </main>
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
  const emailAddress = context.authenticatedUser.user.emailAddress
  const password = context.authenticatedUser.user.password

  const {
    title,
    description, 
    estimatedTime,
    materialsNeeded,
  } = this.state; 
  const course = {
    title,
    description,
    estimatedTime,
    materialsNeeded,
  };
  context.data.createCourse(course, emailAddress, password)
  .then(res => {
    console.log(res);
  })
  .then( errors => {
    if(errors.length) {
      this.setState({ errors });
    } else {
        this.props.history.push('/');    
    }
    })
  
}

cancel = () => {
  this.props.history.push('/');
  }
}