import React from "react";

function UserProfileComp({ userData }) {
  return (
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-12 col-md-4">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              src={userData?.profile_image?.medium}
              className="img-fluid rounded-circle profile-img"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="card-body">
            <div className="h-100 w-100 d-flex align-items-center">
              <h5 className="card-title me-5">{userData?.name}</h5>
              <button className="btn btn-primary ms-md-5">Follow</button>
              {/* <button
                className={`btn btn-primary ms-5 ${
                  userData?.user ? "d-block" : "d-none"
                }`}
              >
                Edit
              </button> */}
              {/* <button
                className={`btn btn-outline-secondary ms-3 ${
                  userData?.user ? "d-block" : "d-none"
                }`}
              >
                Logout
              </button> */}
              <button className="btn btn-outline-secondary ms-3">
                Message
              </button>
            </div>
            <div className="d-flex align-items-center mx-md-5 mt-4">
              <p className="card-text me-5">
                {userData?.photos?.length || "0"} Posts
              </p>
              <p className="card-text me-5">
                {userData?.followers_count || "0"} followers
              </p>
              <p className="card-text my-mb">
                {userData?.following_count || "0"} following
              </p>
            </div>
            <p className="card-text">{userData?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileComp;
