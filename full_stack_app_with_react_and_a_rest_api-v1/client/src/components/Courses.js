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
        

        <div className="course-container">
      {courses.map((course) => {
         return (
            <div className="wrap main--grid" key={course.id}>
            <a className="course--module course--link" href="course-detail.html">
              <h2 className="course--label">{course.label}</h2>
              <h3 className="course--title">{course.title}</h3>
            </a>
            </div>
         );
      })}
   </div>
      )
    }
  

  export default Courses; 