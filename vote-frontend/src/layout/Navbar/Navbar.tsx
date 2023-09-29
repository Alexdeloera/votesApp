import { Link } from "react-router-dom"
import './navbar.css'
export const Navbar = () => {
  return (
    <nav className="navbar-nav">
      <h2>
        <Link to='/home' >Helping Community</Link>
      </h2>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <Link to='/register'>Singn Up</Link>
        </li>
        <li  className="navbar-li">
          <Link to='/login'>Singn In</Link>
        </li>
        <li className="navbar-li">
          <Link to='/login'>Singn Out</Link>
        </li>
        <li className="navbar-li">
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}