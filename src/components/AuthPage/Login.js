import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, provider } from "../../Firebase-config";
import { authActions } from "../../store/auth-slice";
import { userActions } from "../../store/user-slice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        dispatch(authActions.login());
        localStorage.setItem("user", JSON.stringify({ email, password }));
        dispatch(
          userActions.signInUser({ displayName: email.split("@")[0], email })
        );
        navigate("/home");
      })
      .catch((err) => alert(err.message));
  };

  const google = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        dispatch(
          userActions.signInUserWithGoogle({
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
          })
        );
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: result.user.email,
            photoURL: result.user.photoURL,
            displayName: result.user.displayName,
          })
        );
        dispatch(authActions.login());
        navigate("/home");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div
      className="row"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="col-12">
        <div className="container">
          <div className="row my-5 sign-box">
            <div className="col-12 col-md-6 m-0 p-0 resp-display">
              <div className="card h-100 sign-img">
                <img
                  src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__340.jpg"
                  alt=""
                  className="h-100"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card h-100 w-100 p-3 border-0 login-card">
                <form className="row g-3">
                  <div className="col-12 mt-3">
                    <h2>Login to Instagram</h2>
                    <p className="intro-line">
                      Welcome Back! login with your information which you used
                      during sign-up
                    </p>
                  </div>
                  <div className="col-12 mt-3">
                    <label htmlFor="inputEmail" className="form-label my-label">
                      Email address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <label
                      htmlFor="inputPassword"
                      className="form-label my-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <a href="/" className="float-end">
                      Forgot Your Password ?
                    </a>
                  </div>
                  <div className="col-12">
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-primary mt-4"
                        type="button"
                        onClick={handleSignIn}
                      >
                        Login
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={google}
                      >
                        Sign in with Google
                      </button>
                    </div>
                  </div>
                  <div className="col-12 mt-5 text-center login-text">
                    <p>
                      Do not have an account?{" "}
                      <NavLink to="/register">Register</NavLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
