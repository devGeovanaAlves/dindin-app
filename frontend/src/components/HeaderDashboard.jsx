import { Link, useNavigate } from "react-router-dom";
import { onDataChange } from "../utils/functions";
import Logo from "../../public/logo-icon.svg";
import Avatar from "../assets/profile-icon.svg";
import Logout from "../assets/logout-icon.svg";
import "../styles/Header.css";

const Header = ({ user, setDataAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onDataChange(
      {
        userPass: "",
        formPass: "",
        userKey: "",
      },
      setDataAuth
    );

    navigate("/");
  };

  return (
    <header>
      <Link to={"/"} className="container-logo">
        <img src={Logo} alt="Logotipo" />
        <span>Dindin</span>
      </Link>

      <div className="container-user-info">
        <img className="avatar-icon" src={Avatar} alt="Avatar" />
        <span>{user.name}</span>
        <button onClick={handleLogout} className="logout-button">
          <img className="logout-icon" src={Logout} alt="Logout" />
        </button>
      </div>
    </header>
  );
};

export default Header;
