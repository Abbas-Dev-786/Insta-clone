import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import UserProfileComp from "./UserProfileComp";
import UserPostsComp from "./UserPostsComp";
import Navbar from "../Navbar";
import "../../Profile.css";

function OtherUser() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.unsplash.com/search/users/?query=${
          username.split(" ")[0]
        }&client_id=${key}`
      )
      .then((results) => {
        setUserData(results.data.results[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message + "🎯"));

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: "50px" }}>
        {!isLoading && <UserProfileComp userData={userData} />}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {isLoading && <Spinner />}
          {userData?.photos?.map((el, i) => {
            return (
              <div className="col" key={i}>
                <UserPostsComp el={el} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OtherUser;
