import Header from "../components/Header";
import SignIn from "../components/SignInForm";
import Description from "../components/DescriptionHome";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container-page-home">
      <Header />
      <div className="container-main-home">
        <SignIn />
        <Description />
      </div>
    </div>
  );
};

export default Home;
