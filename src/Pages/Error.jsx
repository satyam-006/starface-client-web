import react from 'react'
import { NavLink } from 'react-router-dom';


function Error() {
  
  return (
    <section className="flex justify-center items-center h-screen text-center w-10vw h-60vh">
      <div className="content max-w-md p-5 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="header text-6xl m-0">404</h2>
        <h4 className="mt-2">Sorry! page not found</h4>
        <p className="leading-relaxed">
          Oops! it seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.
        </p>
        <div className='btns flex justify-around mt-5'>
          <NavLink to="/" className="px-4 py-2 bg-blue-500 text-white rounded">return home</NavLink>
          <NavLink to="/contact" className="px-4 py-2 bg-red-500 text-white rounded">report problem</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Error;
