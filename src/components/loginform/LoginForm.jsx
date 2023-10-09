import { useContext, useRef, useState } from "react";
import "./LoginForm.scss";
import { AppContext } from "./../../context/app.context";

const LoginForm = () => {
  const { setLogged } = useContext(AppContext);
  const userNameRef = useRef();
  const userPasswordRef = useRef();
  const [error, setError] = useState(false);

  const login = () => {
    setError(false);

    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;

    if (userName === "admin" && userPassword === "admin123") {
      setLogged(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <h2>Panel Admina</h2>
      <form className="inputs-container">
        <input ref={userNameRef} type="text" placeholder="Login" />
        <input ref={userPasswordRef} type="password" placeholder="Password" />
        <button type="button" onClick={() => login()}>
          Zaloguj
        </button>
        {error && <div className="error">Zły login lub hasło</div>}
      </form>
    </div>
  );
};

export default LoginForm;
