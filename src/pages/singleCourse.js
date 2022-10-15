import {Link, useParams} from 'react-router-dom';
import coursesData from '../coursesData'

import team1 from "../imgs/team-01.png"
import team2 from "../imgs/team-02.png"
import team3 from "../imgs/team-03.png"
import team4 from "../imgs/team-04.png"
import team5 from "../imgs/team-05.png"
import course1 from "../imgs/course-01.jpg"
import course2 from "../imgs/course-02.jpg"
import course3 from "../imgs/course-03.jpg"
import course4 from "../imgs/course-04.jpg"
import course5 from "../imgs/course-05.jpg"

export default function SingleCourse () {
  const {courseId} = useParams()
  const course = coursesData.find(course => course.id == courseId) // The Single Course
  return (
    <div className="courses-page m-20">
      <div className="single-course course bg-white rad-6 p-relative">
        <img className="cover w-full" src={course.bgImg} alt="" />
        <img className="instructor" src={course.instructorImg} alt="" />
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
        <Link to='/react-project/courses' className='c-white'>
          Back To Courses
        </Link>
      </div>
    </div>
  )
}