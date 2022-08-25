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
                      <input 
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
                      value={estimatedTime} 
                      onChange={change} />
                      <label htmlFor="materialsNeeded">Materials Needed</label>
                    <input 
                      id="materialsNeeded" 
                      name="materialsNeeded"
                      type="text"
                      value={materialsNeeded} 
                      onChange={change}  />
                      </div>
                    </div>
                  </React.Fragment>
                )} />
            </div>
        )

}
 
export default UpdateCourse;
















// class UpdateCourse extends Component {

//   state = {
//     title: "",
//     description: "", 
//     estimatedTime: "",
//     materialsNeeded: "",
//     errors: [],
//   }

//   const {id} = useParams()

//     render() {
//       const user = this.props
//       const {
//         title, 
//         description, 
//         estimatedTime, 
//         materialsNeeded,
//         errors
//       } = this.state
//       return(
//         <div className="bounds">
//           <div className="grid-33 centered signin">
//             <h1>Create Course</h1>
//             <Form 
//               cancel={this.cancel}
//               errors={errors}
//               submit={this.submit}
//               submitButtonText="Update Course"
//               elements={() => (
//                 <React.Fragment>
//                   <label htmlFor="coureTitle">Course Title</label>
//                   <input 
//                     id="title" 
//                     name="title" 
//                     type="text"
//                     value={title} 
//                     onChange={this.change}  />
//                     <p>By {user.firstName}</p>
//                     <label htmlFor="description">Course Description</label>
//                     <input 
//                     id="description" 
//                     name="description" 
//                     type="text"
//                     value={description} 
//                     onChange={this.change} />
//                     <label htmlFor="estimatedTime">Estimated Time</label>
//                   <input 
//                     id="estimatedTime" 
//                     name="estimatedTime" 
//                     type="text"
//                     value={estimatedTime} 
//                     onChange={this.change} />
//                     <label htmlFor="materialsNeeded">Materials Needed</label>
//                   <input 
//                     id="materialsNeeded" 
//                     name="materialsNeeded"
//                     type="text"
//                     value={materialsNeeded} 
//                     onChange={this.change}  />
//                 </React.Fragment>
//               )} />
//           </div>
//         </div>
//       )
//     }
//   }

//   export default UpdateCourse; 