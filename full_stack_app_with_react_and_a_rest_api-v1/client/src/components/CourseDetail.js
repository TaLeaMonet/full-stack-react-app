import React from 'react';

class CourseDetail extends Component {

    state = {
      courseDetail: [],
    }
  
    render() {
      return(
        <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              {"{"}/* pull in title info for each course here */{"}"}
              <h4 className="course--name">
                {"{"}
                {"}"}
              </h4>
              {"{"}/* pull in course description for each course here */{"}"}
              <p>
                {"{"}
                {"}"}
              </p>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>
                {"{"}
                {"}"}
              </p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ul className="course--detail--list">
                {"{"}/* pull in materials needed for each course here */{"}"}
                <li>
                  {"{"}
                  {"}"}
                </li>
                <li>
                  {"{"}
                  {"}"}
                </li>
                <li>
                  {"{"}
                  {"}"}
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      
      )
    }
  }

  export default CourseDetail; 