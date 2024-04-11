import "./login.scss";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "SignUp") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data);
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data);
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <div className="login">
      <div className="submain">
        <span className="logo">Geekster Admin</span>
        <h1 className="Title">{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "SignIn" : "SignUp")}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password" />
          <button>{login ? "SignIn" : "SignUp"}</button>
        </form>
        <div className="buttons">
          <div
            className={login == true ? "button active" : "button"}
            onClick={() => {
              setLogin(true);
            }}
          >
            Sign In
          </div>
          <div
            className={login == false ? "button active" : "button"}
            onClick={() => {
              setLogin(false);
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
