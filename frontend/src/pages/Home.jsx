import Header from "../components/Header";
// import SignIn from "../components/SignInForm";
import Description from "../components/DescriptionHome";
import "../styles/Home.css";
import "../styles/SignInForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ handleDataAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");

  const styleErrorMessage = {
    color: "#ff576b",
    fontSize: "14px",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let storageUser = localStorage.getItem(`${email}`);
    let user = JSON.parse(storageUser);

    handleDataAuth({ userPass: user.password, formPass: password });

    if (!storageUser) {
      setError(true);
      setStatus("Usuário não encontrado");
      return;
    }

    if (user.password === password) {
      navigate("/dashboard");
    } else {
      setError(true);
      setStatus("Senha incorreta");
      return;
    }

    setError(false);
  };

  return (
    <div className="container-page home">
      <Header />
      <div className="container-main-home">
        <Description />
        <div className="container-form sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>
              <span>E-mail</span>
              <input
                type="text"
                name="e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>

            {error && <span style={styleErrorMessage}>{status}</span>}

            <input
              className="input-submit"
              type="submit"
              name="sign-in"
              value="Entrar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
