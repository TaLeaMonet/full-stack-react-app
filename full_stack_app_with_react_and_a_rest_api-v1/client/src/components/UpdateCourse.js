import React, { useContext, useState, useEffect } from 'react';
import Form from './Form';
import { useParams, useHistory } from 'react-router-dom';
import { Context } from './Context';

function UpdateCourse() {
 const history = useHistory()
 const context = useContext(Context);

 const authUser = context.authenticateUser

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [estimatedTime, setEstimatedTime] = useState('')
const [materialsNeeded, setMaterialsNeeded] = useState('')
const [errors, setErrors] = useState([])
const {id} = useParams()


useEffect(() => {
  context.data.getCourse(id)
  .then((res) => {
    console.log(res)
  })
}
)

const submit = () => {
  const emailAddress = authUser.emailAddress;
  const password = authUser.password;
  const course = {title, description, estimatedTime, materialsNeeded}
  
  context.data.UpdateCourse(id, course, emailAddress, password)
  .then((res) => {
    console.log(res)
  })
}

const change = (e) => {
  const value = e.target.value
  
  switch(e.target.name) {
    case "title":
      setTitle(value);
      break;
    case "description":
      setDescription(value);
      break;
    case "estimatedTime":
      setEstimatedTime(value);
      break;
    case "materialsNeeded":
      setMaterialsNeeded(value);
      break;
    default:
      return;
  }
}

const cancel = () => {
  history.push('/');
}

return(
            <div className="wrap">
              <h1>Update Course</h1>
              <Form 
                cancel={cancel}
                errors={errors}
                submit={submit}
                submitButtonText="Update Course"
                elements={() => (
                  <React.Fragment>
                    <div className="main--flex">
                      <div>
                    <label htmlFor="coureTitle">Course Title</label>
                    <input 
                      id="title" 
                      name="title" 
                      type="text"
                      value={title} 
                      onChange={change}  />
                      <p>By</p>
                      <label htmlFor="description">Course Description</label>
                      <textarea 
                      id="description" 
                      name="description" 
                      type="text"
                      value={description} 
                      onChange={change} />
                      </div>
                      <div>
                      <label htmlFor="estimatedTime">Estimated Time</label>
                    <input 
                      id="estimatedTime" 
                      name="estimatedTime" 
                      type="text"
                      defaultValue={estimatedTime} 
                      onChange={change} />
                      <label htmlFor="materialsNeeded">Materials Needed</label>
                    <textarea 
                      id="materialsNeeded" 
                      name="materialsNeeded"
                      type="text"
                      defaultValue={materialsNeeded} 
                      onChange={change}  />
                      </div>
                    </div>
                  </React.Fragment>
                )} />
            </div>
        )

}
 
export default UpdateCourse;
