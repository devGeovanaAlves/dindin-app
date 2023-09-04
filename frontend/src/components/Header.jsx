import Logo from "../../public/logo-icon.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container-logo">
        <img src={Logo} alt="Logotipo" />
        <span>Dindin</span>
      </div>
    </header>
  );
};

export default Header;
