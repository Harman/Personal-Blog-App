import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import "./App.css";

let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //if login-> user-info
      //if logout-> user-null
      if (user) {
        let { displayName, email, uid } = user;

        props.handleUser({ displayName, email, uid });
      } else {
        props.handleUser(user);
      }
    });
  }, []);
  return (
    <div>
      {props.user ? <Redirect to="/home" /> : ""}
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">WELCOME</span>
        </div>
      </nav>
      <div className="row mycont">
        <div className="col text-center mx-auto">
          <img
            src="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png"
            className="img-fluid rounded myimg"
          ></img>
        </div>
        <div className="col">
          <div className = "d-grid gap-2 col-6  text-center mx-auto loginBtn">

          <button
            onClick={signInWithGoogle}
            type="submit"
            className="btn btn-primary m-4"
          >
            Login With Google
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
