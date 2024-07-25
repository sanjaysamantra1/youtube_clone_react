import React, { useState, useEffect } from "react";
import youtube from "../assets/youtube-logo.png";
import { toggleMenu } from "../utils/Slice/appSlice";
import { useDispatch } from "react-redux";
import { SEARCH_API, SEARCH_VIDEO_API } from "../utils/constant";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faSearch,
  faBell,
  faVideoCamera,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { setVideos } from "../utils/Slice/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [showQuery, setShowQuery] = useState(false);

  const dispatch = useDispatch();

  //toggle menu dispatch action to reducer
  const toggleMenuButton = () => {
    dispatch(toggleMenu());
  };

  
  //api call to search query
  const getSearchResult = async () => {
    try {
      const res = await axios.get(SEARCH_API + searchQuery);
      const data = res?.data[1];
      setQueryData(data);
    } catch (err) {
      console.error(err);
    }
  };

  //  Debouncing --- useeffect will call on every query search as per dependency
  //  but api call will happen only after 500ms
  //  between the timespan whatever text(query) entered in search box will get return(revoked)
  useEffect(() => {
    const timer = setTimeout(() => getSearchResult(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const selectedQuerySearch = (item) => {
    setSearchQuery(item);
    setShowQuery(false);
  };


  //video list api call to update viewContainer and dispatching
  const getUpdatedVideoList = async () => {
    try {
      const res = await axios.get(SEARCH_VIDEO_API + searchQuery);
      const data = res?.data?.items;
      dispatch(setVideos(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex m-3 justify-between">
        <div className="flex">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className="m-2 cursor-pointer"
            onClick={toggleMenuButton}
          />
          <img src={youtube} className="w-30 h-6 m-2 " />
        </div>

        <div className="relative flex flex-col">
          <div className="mx-20 w-96 flex">
            <input
              placeholder="Search"
              className="w-full h-10 border-solid border-2 block border-grey-600 rounded-l-lg pl-5"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowQuery(true)}
              //  onBlur={()=>setShowQuery(false)}
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="p-2 border-solid border-2 border-grey-600 rounded-r-lg px-5"
              onClick={getUpdatedVideoList}
            />
            <FontAwesomeIcon icon={faMicrophone} size="lg" className="m-2" />
          </div>
          {showQuery && (
            <div className="absolute bg-grey cursor-pointer top-11 left-11">
              <ul className="rounded bg-white w-96">
                {queryData.map((item) => (
                  <div className="flex ml-2 mt-2">
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                    <li
                      onClick={() => selectedQuerySearch(item)}
                      className="ml-2"
                    >
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mr-14">
          <FontAwesomeIcon icon={faBell} size="lg" className="m-2" />
          <FontAwesomeIcon icon={faVideoCamera} size="lg" className="m-2" />
        </div>
      </div>
    </>
  );
};

export default Header;
