import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/SignUpForm.css";

const SignUp = () => {
  return (
    <div className="container-page">
      <Header />
      <div className="container-form sign-up">
        <form>
          <h1>Cadastre-se</h1>
          <label>
            <span>Nome</span>
            <input type="text" name="name" />
          </label>

          <label>
            <span>E-mail</span>
            <input type="text" name="email" />
          </label>

          <label>
            <span>Senha</span>
            <input type="password" name="password" />
          </label>

          <label>
            <span>Confirmação de senha</span> {}
            <input type="password" name="checkPassword" />
          </label>

          <input
            className="input-submit"
            type="submit"
            name="sign-in"
            value="Cadastrar"
          />

          <span className="redirect-home">
            Já tem cadastro?<Link to="/"> Clique aqui!</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
