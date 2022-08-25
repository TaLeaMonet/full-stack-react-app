import React, { useState, useEffect, useContext } from 'react';
import { Context } from './Context';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import UserSignOut from './UserSignOut';

function CourseDetail() {
  const context = useContext(Context);
  const authUser = context.authenticatedUser
  const [errors, setErrors] = useState([]);
  const [course, setCourse] = useState([]);
  // const [id, setId] = useState([]);
 const {id} = useParams();
  console.log(authUser);

//  context.data.getCourse(id)
//  .then((res) => {
//    console.log(res);
//  })

 // Context approach
  // useEffect(() => {
  //   context.data.getCourse(id)
  //   .then((res) => {
  //     setCourse(res);
  //     console.log(res);
  //   });
  // }) 

  // Fetch approach
  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then((res) => {
        console.log(res);
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

  const deleteButton = () => {
    const emailAddress = authUser.emailAddress
    const password = authUser.password

    context.data.deleteCourse(id, emailAddress, password)
    .then((res) => {
      console.log(res);
    }) 
  }

  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">

          {/* { authUser && authUser.id === u */}
          <Link className="button" to={`courses/${id}/update`}>
            Update Course
          </Link>
          <button className="button">
            Delete Course
          </button>
          <Link className="button button-secondary" to="/">
            Return to List
          </Link>
        </div>
      </div>
      <div className="wrap">
        <h2>Course Detail</h2>

        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name"></h4>
              <p>By {}</p>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p></p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ul className="course--detail--list"></ul>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default CourseDetail; 