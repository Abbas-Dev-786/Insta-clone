import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase-config";
import { authActions } from "../../store/auth-slice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        dispatch(authActions.login());
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div
      className="row"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
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
              <div className="card h-100 p-3 border-0 login-card">
                <form className="row g-3">
                  <div className="col-12 mt-4">
                    <h2>Register to Instagram</h2>
                    <p className="intro-line">Register with your information</p>
                  </div>
                  <div className="col-12 mt-4">
                    <label htmlFor="inputName" className="form-label my-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-12 mt-4">
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
                  <div className="col-12 mt-4">
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
                  <div className="col-12">
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-primary mt-4"
                        type="button"
                        onClick={handleSignIn}
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                  <div className="col-12 mt-4 text-center login-text">
                    <p>
                      Do you have an account? <NavLink to="/">Login</NavLink>
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

export default Register;
