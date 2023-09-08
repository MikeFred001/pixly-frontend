import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";


/** Renders NavBar
 *
 * Props: none
 *
 * State: none
 *
 * App -> NavBar */

function NavBar() {
  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        <NavLink className="NavBar-home" to="/">PIXLY</NavLink>

        <NavLink className="NavBar-upload" to="/upload">Upload Photo</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;