import React from 'react';

class Courses extends Component {

    state = {
      courses: [],
    }
  
    render() {
      return(
        <div classname="wrap main--grid">
        <a classname="course--module course--link" href="course-detail.html">
          <h2 classname="course--label">Course</h2>
          {"{"}/* pull in title info for each course here */{"}"}
          <h3 classname="course--title">
            {"{"}
            {"}"}
          </h3>
        </a>
      </div>
      )
    }
  }

  export default Courses; 