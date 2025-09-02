import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isActive, closeSidebar }) => {
  return (
    <div className={`side-bar ${isActive ? "active" : ""}`}>
      <nav>
        <ul className="nav">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeSidebar}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeSidebar}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeSidebar}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeSidebar}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="social-btn-groups">
        <a href="#" className="btn">
          <IoLogoTwitter />
        </a>
        <a href="#" className="btn">
          <IoLogoLinkedin />
        </a>
        <a href="#" className="btn">
          <IoLogoFacebook />
        </a>
        <a href="#" className="btn">
          <IoLogoYoutube />
        </a>
      </div>

      <footer className="side-bar-footer">
        <p className="copyright">
          &copy; 2025 All rights Komal
          <br />
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
