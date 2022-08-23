import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Courses from './components/Courses';


const  App = () => {
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
  return (
    <div>
   <Header />
   <div className="course-container">
      {courses.map((course) => {
         return (
            <div className="course-card" key={course.id}>
               <h2 className="course-title">{course.title}</h2>
               <p className="course-desc">{course.description}</p>
               <p className="course-est-time">{course.estimatedTime}</p>
               <p className="course-materials">{course.materialsNeeded}</p>
            </div>
         );
      })}
   </div>
   </div>
   
  );
}

export default App;
