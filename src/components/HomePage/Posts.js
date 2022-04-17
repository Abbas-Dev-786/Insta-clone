import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Posts(props) {
  const comment = useRef("");

  const handleLike = (e) => {
    const likeEl = e.target.closest(".card-body").querySelector(".card-text");
    let isLiked = false;

    if (!isLiked && e.target.classList.contains("bi-heart")) {
      e.target.classList.remove("bi-heart");
      e.target.classList.add("bi-heart-fill", "text-danger");
      isLiked = true;
      likeEl.textContent = `${props.likes + 1} likes`;
    }

    if (!isLiked && e.target.classList.contains("bi-heart-fill")) {
      e.target.classList.remove("bi-heart-fill", "text-danger");
      e.target.classList.add("bi-heart");
      likeEl.textContent = `${props.likes} likes`;
    }
  };

  const handleComments = (e) => {
    e.preventDefault();
    const html = `
      <div>${comment.current.value}</div>
    `;
    e.target
      .closest(".card-body")
      .querySelector(".comments")
      .insertAdjacentHTML("afterbegin", html);
    comment.current.value = "";
  };

  return (
    <div className="col mb-5">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="img h-100 d-flex align-items-center">
          <img
            className="rounded-circle me-3"
            style={{ height: "40px", width: "40px" }}
            src={props.profileImg}
            alt=""
          />
          <NavLink to={`/Otheruser/${props.name}`} className="mt-2">
            {props.name}
          </NavLink>
        </div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className="card">
        <img src={props.imageURL} className="card-img-top" alt="post" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <i className="bi bi-heart fs-4 me-3" onClick={handleLike}></i>
              <i className="bi bi-chat fs-4 me-3"></i>
              <i className="bi bi-send fs-4"></i>
            </div>
            <div className="alone">
              <i className="bi bi-bookmark fs-4"></i>
            </div>
          </div>
          <p className="card-text">{props.likes} likes</p>
          <h6 className="card-title">{props.caption}</h6>

          <small>view all comments</small>
          <div className="comments"></div>
          <form onSubmit={handleComments}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                ref={comment}
              />
              <button className="input-group-text" id="basic-addon2">
                Post a Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
