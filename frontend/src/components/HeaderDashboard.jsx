import Logo from "../../public/logo-icon.svg";
import Avatar from "../assets/profile-icon.svg";
import Logout from "../assets/logout-icon.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container-logo">
        <img src={Logo} alt="Logotipo" />
        <span>Dindin</span>
      </div>

      <div className="container-user-info">
        <img className="avatar-icon" src={Avatar} alt="Avatar" />
        <span>Name</span>
        <img className="logout-icon" src={Logout} alt="Logout" />
      </div>
    </header>
  );
};

export default Header;
