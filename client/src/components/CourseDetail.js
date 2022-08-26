import React, { useState, useEffect, useContext } from 'react';
import { Context } from './Context';
import { useParams, Link, useHistory } from 'react-router-dom';
import ReactMarkdown  from 'react-markdown';


function CourseDetail() {
  const context = useContext(Context);
  const [course, setCourse] = useState([]);
  const {id} = useParams();
  const authUser = context.authenticatedUser;
  const history = useHistory();
  
  useEffect(() => {
    context.data.getCourse(id)
    .then(data => setCourse(data))
    .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const deleteButton = async() => {
    await context.data.deleteCourse(
      id,
      authUser.emailAddress,
      authUser.password
    );
    history.push("/");
  }

  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">

          { authUser && authUser.id === course.userId ? (
          <React.Fragment>
          <Link className="button" to={`/courses/${id}/update`}>
            Update Course
          </Link>
          <button onClick={deleteButton} className="button">
            Delete Course
          </button>
          <Link className="button button-secondary" to="/">
            Return to List
          </Link>
          </React.Fragment>
          ) : (
            <React.Fragment>
               <Link className="button button-secondary" to="/">
            Return to List
          </Link>
          </React.Fragment>
          )  }
        </div>
      </div>
      <div className="wrap">
        <h2>Course Detail</h2>

        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name">{course.title}</h4>
              <p>{`By ${course.User?.firstName} ${course.User?.lastName}`}</p>
              <ReactMarkdown>{course.description}</ReactMarkdown>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>{course.estimatedTime}</p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ul className="course--detail--list">
                <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default CourseDetail; 