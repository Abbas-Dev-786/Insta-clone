import React from "react";
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { authActions } from "../../store/auth-slice";

export default function Story(props) {
  // const dispatch = useDispatch();
  return (
    <div className="story">
      <NavLink to="/story">
        <img
          className="rounded-circle"
          style={{ height: "60px", width: "60px" }}
          src={props.img}
          alt="story-img"
          // onClick={(e) => {
          //   dispatch(authActions.logout());
          // }}
        />
        <p className="text-center">{props.name}</p>
      </NavLink>
    </div>
  );
}
