import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./../Spinner";
import Images from "./Images";
import Navbar from "../Navbar";

export default function Discover() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = (page = 1, arr = []) => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_2}&safesearch=true&page=${page}`
      )
      .then((response) => setData([...arr, ...response.data.hits]))
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = () => {
    fetchData(page + 1, data);
    setPage(page + 1);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<Spinner />}
              style={{ overflow: "hidden" }}
            >
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="10px">
                  {data.map((el, i) => {
                    console.log(el);
                    return <Images key={i} user={el} src={el.webformatURL} />;
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}
