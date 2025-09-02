import { IoMenuOutline } from "react-icons/io5";
import img from "../assets/img/img.jpg";
const Header = ({ toggleSidebar }) => {
  return (
    <nav className="nav-mobile">
      <div className="navbar-brand">
        <img src={img} alt="" className="brand-img" />
        <h1 className="brand-name">Komal Raza</h1>
      </div>
      <IoMenuOutline className="menu-toggler" onClick={toggleSidebar} />
    </nav>
  );
};

export default Header;
