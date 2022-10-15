import { NavLink, Outlet } from "react-router-dom"
import FixedNavbar from "./fixedNavbar"

export default function FixedSidbar () {
  return (
    <div className="page d-flex">
      <div className="sidbar bg-white p-20 p-relative">
    <h3 className="p-relative txt-c mt-0">Mahmoud</h3>
    <ul>
      <li>
        <NavLink end to='' className="d-flex align-center fs-14 c-black rad-6 p-10" href="index.html">
          <i className="fa-solid fa-chart-bar fa-fw"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/settings' className="d-flex align-center fs-14 c-black rad-6 p-10" href="settings.html">
          <i className="fa-solid fa-gear fa-fw"></i>
          <span>Settings</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/profile' className="d-flex align-center fs-14 c-black rad-6 p-10" href="profile.html">
          <i className="fa-solid fa-user fa-fw"></i>
          <span>Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/projects' className="d-flex align-center fs-14 c-black rad-6 p-10" href="projects.html">
          <i className="fa-solid fa-diagram-project fa-fw"></i>
          <span>Projects</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/courses' className="d-flex align-center fs-14 c-black rad-6 p-10" href="courses.html">
          <i className="fa-solid fa-graduation-cap fa-fw"></i>
          <span>Courses</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/friends' className="d-flex align-center fs-14 c-black rad-6 p-10" href="friends.html">
          <i className="fa-solid fa-user-group fa-fw"></i>
          <span>Friends</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/files' className="d-flex align-center fs-14 c-black rad-6 p-10" href="files.html">
          <i className="fa-solid fa-file fa-fw"></i>
          <span>Files</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/plans' className="d-flex align-center fs-14 c-black rad-6 p-10" href="plans.html">
          <i className="fa-solid fa-calendar-check fa-fw"></i>
          <span>Plans</span>
        </NavLink>
      </li>
    </ul>
      </div>
      <div className="content w-full">
        <FixedNavbar/>
        <Outlet/>
      </div>
    </div>
  )
}