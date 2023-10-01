import { Link, useNavigate } from "react-router-dom"
import './navbar.css'
import { useContext} from "react";
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
  const { handlechange } = useContext(sessionProvider);
   
  const handleSearch = (e: any) => { 
    handlechange(e.target.value);
  }
  const location=window.location.pathname;

  return (
    <nav className="navbar-nav">
      <h2 className="mb-2">
        <Link to='/home' >Helping Community</Link>
      </h2>
      <div className="flex items-center">
        {session.name !== '' && location==='/dashboard' && <input
          type="text"
          placeholder="search..."
          className="navbar-finder"
          onChange={handleSearch}
        />}
        <ul className="navbar-ul">
          {session.name == '' && <li className="navbar-li">
            <Link to='/register'>Sign Up</Link>
          </li>}
          {session.name == '' && <li className="navbar-li">
            <Link to='/login'>Sign In</Link>
          </li>}
          {session.name !== '' && <li className="navbar-li">
            <Link to='/dashboard'>All Posts</Link>
          </li>}
          {session.name !== '' && <li className="navbar-li">
            <Link to='/createpost'>Add Post</Link>
          </li>}
          {session.name !== '' && <li className="navbar-li" >
            <button onClick={handleClick}>Sign Out</button>
          </li>}
          <li className="navbar-li">
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}