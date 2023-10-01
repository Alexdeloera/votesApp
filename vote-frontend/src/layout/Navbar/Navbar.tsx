import { Link, useNavigate } from "react-router-dom"
import './navbar.css'
import { useContext } from "react";
import { sessionProvider } from "../../context/SessionContext";
export const Navbar = () => {
  const navigate = useNavigate();
  const { toggleSession } = useContext(sessionProvider);
  const { session } = useContext(sessionProvider);
  const handleClick = () => {
    const values = {
      id: 0,
      name: '',
      token: ''
    }
    toggleSession(values);
    navigate('login')
  }

  return (
    <nav className="navbar-nav">
      <h2 className="mb-2">
        <Link to='/home' >Helping Community</Link>
      </h2>
      <div className="flex items-center">
        {session.name !== '' && <input
          type="text"
          placeholder="search..."
          className="navbar-finder"
        />}
        <ul className="navbar-ul">
          {session.name == '' && <li className="navbar-li">
            <Link to='/register'>Singn Up</Link>
          </li>}
          {session.name == '' && <li className="navbar-li">
            <Link to='/login'>Singn In</Link>
          </li>}
          {session.name !== '' && <li className="navbar-li">
            <Link to='/dashboard'>All Posts</Link>
          </li>}
          {session.name !== '' && <li className="navbar-li">
            <Link to='/createpost'>Add Post</Link>
          </li>}
          {session.name !== '' && <li className="navbar-li" >
            <button onClick={handleClick}>Singn Out</button>
          </li>}
          <li className="navbar-li">
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}