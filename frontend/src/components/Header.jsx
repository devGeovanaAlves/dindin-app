import { Link } from "react-router-dom";
import Logo from "../../public/logo-icon.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="container-logo">
        <img src={Logo} alt="Logotipo" />
        <span>Dindin</span>
      </Link>
    </header>
  );
};

export default Header;
