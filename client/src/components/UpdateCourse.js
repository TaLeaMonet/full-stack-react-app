import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

const UpdateCourse = ({context}) => {
  const history = useHistory();
  const { id } = useParams();
  const { firstName, lastName, emailAddress, password } = context.authenticatedUser; 
  const [errors, setErrors] = useState([]);
  const [course, setCourse] = useState({
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
  });

    useEffect(() => {
      context.data.getCourse(id)
      .then(data => setCourse(data))
      .catch(err => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  

  const handleSubmit = e => {
    e.preventDefault();
    context.data.updateCourse(course, emailAddress, password)
    .then(message => message.length ? setErrors(message) : history.push('/'))
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCourse(prevState => ({
        ...prevState,
        [name]: value
    }));
  };



  return (
    <main>
      <div className="wrap">
        <h2>Update Course</h2>
        {errors && (errors.length) ? 
          <div className="validation--errors">
            <h3>Validation Errors</h3>
            <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
            </ul>
          </div>
        : null}
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input id="courseTitle" name="title" type="text" value={course.title} onChange={handleChange} />

              <p>{`By ${firstName} ${lastName}`}</p>

              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" name="description" value={course.description} onChange={handleChange}></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" name="estimatedTime" type="text" value={course.estimatedTime} onChange={handleChange} />

              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded" value={course.materialsNeeded} onChange={handleChange}></textarea>
            </div>
          </div>
          <button className="button" type="submit">Update Course</button>
          <Link className="button button-secondary" to='/'>Cancel</Link>
        </form>
      </div>
    </main>
  )
}
export default UpdateCourse;