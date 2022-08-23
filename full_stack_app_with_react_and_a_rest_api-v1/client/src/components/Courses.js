import React, {Component} from 'react';

class Courses extends Component {

    state = {
      courses: [],
    }
  
    render() {
      return(
        <div className="wrap main--grid">
        <a className="course--module course--link" href="course-detail.html">
          <h2 className="course--label">Course</h2>
          <h3 className="course--title">
            {"{"}
            {"}"}
          </h3>
        </a>
      </div>
      )
    }
  }

  export default Courses; 