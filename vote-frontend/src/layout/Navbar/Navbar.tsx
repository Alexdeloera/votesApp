import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link to='/home' >Helping Community</Link>
      </h2>
      <ul>
        <li>
          <Link to='/register'>Singn Up</Link>
        </li>
        <li>
          <Link to='/login'>Singn In</Link>
        </li>
        <li>
          <Link to='/login'>Singn Out</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}