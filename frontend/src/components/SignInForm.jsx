import "../styles/SignInForm.css";

const SignInForm = () => {
  return (
    <div className="container-form-sign-in">
      <form>
        <h1>Login</h1>
        <label>
          <span>E-mail</span>
          <input type="text" name="e-mail" />
        </label>

        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>

        <input
          className="input-submit"
          type="submit"
          name="sign-in"
          value="Entrar"
        />
      </form>
    </div>
  );
};

export default SignInForm;
