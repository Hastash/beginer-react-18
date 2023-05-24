import './css/Nav.css';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    return(
      <div className="topnav">
        <NavLink to="/">Member</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/todo">Todo</NavLink>
      </div>
    );
}
export default Nav;