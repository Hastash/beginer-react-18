import './css/Nav.css';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    return(
      <div className="topnav">
        <NavLink to="/">Member</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/search">Search</NavLink>

      </div>
    );
}
export default Nav;