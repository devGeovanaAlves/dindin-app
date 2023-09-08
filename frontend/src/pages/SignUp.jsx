import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/SignUpForm.css";
import { useState } from "react";

const SignUp = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const styleErrorMessage = {
    color: "#ff576b",
    fontSize: "14px",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === checkPassword) {
      const user = {
        name,
        email,
        password,
        checkPassword,
        transactions: [],
      };

      setUsers((prevUsers) => [...prevUsers, user]);

      setName("");
      setEmail("");
      setPassword("");
      setCheckPassword("");
      setStatusMessage("success");
      navigate("/");
    } else {
      setStatusMessage("error");
    }
  };

  return (
    <div className="container-page">
      <Header />
      <div className="container-form sign-up">
        <form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <label>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label>
            <span>E-mail</span>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            <span>Senha</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          <label>
            <span>Confirmação de senha</span>{" "}
            {statusMessage === "error" && (
              <span style={styleErrorMessage}>
                As senhas precisam ser iguais
              </span>
            )}
            <input
              type="password"
              name="checkPassword"
              value={checkPassword}
              onChange={(event) => setCheckPassword(event.target.value)}
              required
            />
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
