import { Link } from "react-router-dom";

const DescriptionHome = () => {
  return (
    <div className="container-description">
      <h1>
        Controle suas <span>finanças</span>,<br /> sem planilha chata.
      </h1>
      <p>
        Organizar as suas finanças nunca foi tão fácil,
        <br /> com o DINDIN, você tem tudo num único lugar <br />e em um clique
        de distância.
      </p>

      <Link to="/sign-up">Cadastre-se</Link>
    </div>
  );
};

export default DescriptionHome;
