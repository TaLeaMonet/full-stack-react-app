import React, {Component, useState, useEffect } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);
     useEffect(() => {
      fetch('http://localhost:5000/api/courses')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
    .catch((err) => {
      console.log(err.message);
    });
    }, []);
      return(
        <div className="wrap main--grid">
        <a className="course--module course--link" href="course-detail.html">
          <h2 className="course--label">Course</h2>
          <h3 className="course--title"></h3>
        </a>

        <div className="course-container">
      {courses.map((course) => {
         return (
            <div className="course-card" key={course.id}>
               <h2 className="course-title"></h2>
            </div>
         );
      })}
   </div>
      </div>
      )
    }
  

  export default Courses; 