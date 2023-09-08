import { NavLink, Link } from "react-router-dom";


/** Navigation Menu
 *
 * Props:
 *  - none
 *
 * State:
 *  - none
 *
 * App -> NavBar
 * */
function NavBar() {
  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        <NavLink className="NavBar-home" to="/">PIXLY</NavLink>

          <NavLink to="/upload">Upload Photo</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;