import avatar from './imgs/avatar.png'

export default function FixedNavbar () {
  return (
    <div className="head bg-white p-15 d-flex between-flex">
    <div className="search p-relative">
      <input className="p-10" type="search" placeholder="Type Keyword..."/>
    </div>
    <div className="icons d-flex align-center">
      <span className="notification p-relative">
        <i className="fa-regular fa-bell fa-lg"></i>
      </span>
      <img src={avatar} alt=""/>
    </div>
  </div>
  )
}