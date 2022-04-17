import React from "react";
import Navbar from "../Navbar";

export default function Message() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-5">
            <div className="list-group">
              <a href="/" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 ">
                  <div className="me-4 position-relative">
                    <img
                      src="https://randomuser.me/api/portraits/thumb/men/68.jpg"
                      alt="img"
                      style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "50%",
                      }}
                    />
                    <span className="position-absolute top-0 end-0 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-1">UserName</h6>
                    <p className="mb-1">Last message</p>
                    <small>Active</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-7">
            <div className="h-100 w-100 d-flex align-items-center justify-content-center">
              <h1>No Messages are their</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
