import React, { useContext, useState, useEffect } from 'react';
import Form from './Form';
import { useParams, useHistory } from 'react-router-dom';


function UpdateCourse() {

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