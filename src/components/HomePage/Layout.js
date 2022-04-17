import React from "react";
import StoriesContainer from "./StoriesContainer";
import PostsContainer from "./PostsContainer";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { userActions } from "../../store/user-slice";
import Navbar from "../Navbar";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const local = JSON.parse(localStorage.getItem("user"));

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userActions.signOutUser());
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <StoriesContainer />
            <PostsContainer />
          </div>
          <div className="col-12 col-md-5" style={{ paddingTop: "70px" }}>
            <div className="container mx-auto">
              <button className="btn btn-primary" onClick={handleLogout}>
                logout
              </button>
              <h1>Welcome {user.userName || local.displayName}</h1>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
