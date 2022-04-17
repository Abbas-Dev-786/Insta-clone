import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./../Spinner";

export default function PostsContainer() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const key = process.env.REACT_APP_API_KEY;

  const fetchData = (page = 1, arr = []) => {
    axios
      .get(`https://api.unsplash.com/photos/?page=${page}&client_id=${key}`)
      .then(function (response) {
        // handle success
        setData([...arr, ...response.data]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(page);
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    fetchData(page + 1, data);
    setPage(page + 1);
  };

  return (
    <div className="row row-cols-1 row-cols-md-1 g-4">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        {data.map((el, i) => {
          return (
            <Posts
              key={i}
              likes={el.likes}
              imageURL={el.urls.regular}
              caption={el?.user?.bio}
              profileImg={el?.user?.profile_image?.medium}
              name={el?.user?.name}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
}
