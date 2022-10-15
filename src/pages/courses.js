import { NavLink } from 'react-router-dom';
// Courses Data
import coursesData from '../coursesData';

export default function Courses () {
  const courses = coursesData.map((course) => {
    return (
      <div className="course bg-white rad-6 p-relative" key={course.id}>
        <img className="cover" src={course.bgImg} alt="" />
        <img className="instructor" src={course.instructorImg} alt="" />
        <div className="p-20">
          <h4 className="m-0">{course.title}</h4>
          <p className="description c-grey mt-15 fs-14">{course.description}</p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue btn-shape"><NavLink className='c-white' to={`/react-project/courses/${course.id}`}>Course Info</NavLink></span>
          <span className="c-grey">
            <i className="fa-regular fa-user"></i> {course.subscribers}
          </span>
          <span className="c-grey">
            <i className="fa-solid fa-dollar-sign"></i> {course.price}
          </span>
        </div>
      </div>
    )
  })
  return (
    <>
      <h1 className="p-relative">Courses</h1>
      <div className="courses-page d-grid m-20 gap-20">
        {courses}
      </div>
    </>
  )
}