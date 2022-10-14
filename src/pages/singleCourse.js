import {Link, useParams} from 'react-router-dom';
import coursesData from '../coursesData'

export default function SingleCourse () {
  const {courseId} = useParams()
  const course = coursesData.find(course => course.id == courseId) // The Single Course
  return (
    <div className="courses-page m-20">
      <div className="single-course course bg-white rad-6 p-relative">
        <img className="cover w-full" src={`../${course.bgImg}`} alt="" />
        <img className="instructor" src={`../${course.instructorImg}`} alt="" />
        <div className="p-20">
          <h4 className="m-0 title">{course.title}</h4>
          <p className="description c-grey mt-15 fs-14">{course.description}</p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="c-grey">
            <i className="fa-regular fa-user"></i> Subscribers: {course.subscribers}
          </span>
          <span className="c-grey">
            <i className="fa-solid fa-dollar-sign"></i> Price: {course.price}
          </span>
        </div>
      </div>
      <div className="back btn-shape bg-blue w-fit">
        <Link to='/courses' className='c-white'>
          Back To Courses
        </Link>
      </div>
    </div>
  )
}