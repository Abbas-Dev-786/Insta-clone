import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const userImg = useSelector((state) => state.user.userImg);

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-light border-bottom fixed-top d-md-flex"
          style={{
            backgroundColor: "#ffffff",
            height: "54px",
          }}
        >
          <div className="ms-lg-5 ">
            <div className="ms-lg-5">
              <div className="ms-lg-5">
                <NavLink
                  className="navbar-brand ms-lg-5 mt-1 me-5 d-block mx-auto"
                  to="/home"
                >
                  <img
                    className="d-block mx-auto"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse ms-5 d-flex justify-content-center">
            <form className="form-inline my-2 my-lg-0 ms-5 d-none d-sm-block">
              <input
                className="form-control me-sm-2 empty"
                type="search"
                placeholder=" Search"
                // style="font-family: Arial, FontAwesome; height: 28px; width: 216px"
                aria-label="Search"
              />
            </form>
          </div>
          <div
            className="collapse navbar-collapse ms-5 mt-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  <i className="bi bi-house-door fs-4 me-2 d-none d-sm-block mb-2 text-dark"></i>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/message">
                  <i className="bi bi-send fs-4 me-2 d-none d-sm-block mb-2 text-dark"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/discover">
                  <i className="bi bi-compass fs-4 me-2 d-none d-sm-block mb-2 text-dark"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">
                  {!userImg ? (
                    <i className="bi bi-person-circle fs-4 me-2 d-none d-sm-block mb-2 text-dark"></i>
                  ) : (
                    <img
                      src={userImg}
                      alt="user"
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-none d-sm-block"
                  to="https://www.instagram.com/cengizcmataraci"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/s150x150/83792429_185184289374945_1047727451901263872_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_ohc=oor-Z1FIzvgAX-uXuhs&tp=1&oh=e92baf321c3e2e5ebf9416204da05c82&oe=602E0320"
                    className="mb-2"
                    alt=""
                    // style="width: 23px; height: 23px; border-radius: 50%;"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <nav
        className="navbar fixed-bottom navbar-light d-md-none"
        style={{
          height: "70px",
          boxShadow: "0px 4px 20px 5px rgb(4 4 4 / 34%)",
          zIndex: "9999",
        }}
      >
        <div className="container-fluid">
          <ul className="w-100 h-100 d-flex list-unstyled align-items-center justify-content-around">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                <i
                  className="bi bi-house-door fs-4 me-2 d-none d-sm-block mb-2 text-dark"
                  style={{ zIndex: "9999" }}
                ></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/message">
                <i className="bi bi-send fs-4 me-2 d-none d-sm-block mb-2 text-dark"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/discover">
                <i className="bi bi-compass fs-4 me-2 d-none d-sm-block mb-2 text-dark"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                {!userImg ? (
                  <i className="bi bi-person-circle fs-4 me-2 d-none d-sm-block mb-2 text-dark"></i>
                ) : (
                  <img
                    src={userImg}
                    alt="user"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link d-none d-sm-block"
                to="https://www.instagram.com/cengizcmataraci"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/s150x150/83792429_185184289374945_1047727451901263872_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_ohc=oor-Z1FIzvgAX-uXuhs&tp=1&oh=e92baf321c3e2e5ebf9416204da05c82&oe=602E0320"
                  className="mb-2"
                  alt=""
                  // style="width: 23px; height: 23px; border-radius: 50%;"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
