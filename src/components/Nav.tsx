import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <nav> 
      <ul className="nav">
        <li className="nav-item">
          <NavLink 
            to="/"
            className="nav-link"> Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          to="/SavedCandidates"
          className="nav-link"> Potential Candidates</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
