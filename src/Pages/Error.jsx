import react from 'react'
import { NavLink } from 'react-router-dom';


function Error() {
  
  return (
    <>
 <section>
    <div className="content">
        <h2 className="header">404</h2>
        <h4>Sorry! page not found</h4>
        <p>
            Oops! it seems like the page you're trying to access doesn't exist.If you beleive there's an issue, feel free to report it, and we'll look into it.
        </p>
        <div className='btns'>
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
        </div>
    </div>
 </section>
 

    </>
  )
}

export default Error;
