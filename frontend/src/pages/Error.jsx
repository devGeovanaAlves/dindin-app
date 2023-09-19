import { Link } from "react-router-dom";
import { Header } from "../utils/components";
import "../styles/Error.css";

const Error = () => {
  return (
    <div className="container-page ">
      <Header />
      <div className="error-container">
        <h1>Ooops...</h1>
        <h2>Página não encontrada</h2>
        <p>
          A página que você está procurando não foi encontrada.
          <br />
          Já tem cadastro? <Link to="/">Clique aqui</Link> ou{" "}
          <Link to="/sign-up">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
