import { NavLink } from "react-router-dom"

export default function NotFound () {
  return (
    <div className="not-found">
      <center>
        <h2 className="mt-15 mb-15 notFoundNumber">
          404
        </h2>
        <h2>Page Not Found</h2>
        <NavLink to='/' className='bg-blue c-white rad-6 btn-shape'>Back Home</NavLink>
      </center>
    </div>
  )
}