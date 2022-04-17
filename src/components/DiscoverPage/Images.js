import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { postActions } from "../../store/post-slice";

export default function Images({ src, user }) {
  const dispatch = useDispatch();

  return (
    <div>
      <NavLink to={`/posts/${user.user}`}>
        <img
          src={src}
          alt="images"
          style={{ width: "100%", display: "block" }}
          onClick={() => {
            dispatch(
              postActions.setPostData({
                name: user?.user,
                likes: user?.likes,
                imageURL: user?.webformatURL,
                caption: user?.tags,
                profileImg: user?.userImageURL,
              })
            );
          }}
        />
      </NavLink>
    </div>
  );
}
