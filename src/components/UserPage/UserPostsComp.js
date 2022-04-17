import React from "react";

function UserPostsComp({ el }) {
  return (
    <div className="card h-100">
      <img
        src={el?.urls?.regular}
        alt=""
        style={{ height: "380px", width: "auto", objectFit: "cover" }}
        className="card-img-top img-fluid"
      />
    </div>
  );
}

export default UserPostsComp;
