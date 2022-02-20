import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Scroler from "./components/scroler.js";
import YouTube from "react-youtube";
const App = () => {
  const [Videolist, setVideolist] = useState([]);
  const [currentlist, setcurrentlist] = useState([]);
  const [value, setvalue] = useState("");
  const [postperpage, setpostperpage] = useState(10);

  const getcurrentpage = (pgno) => {
    const start = (pgno - 1) * postperpage;
    const end = pgno * postperpage;
    setcurrentlist(Videolist.slice(start, end));
  };
  const opts = {
    height: 180,
    width: 350,
  };
  const fetchvideos = async () => {
    console.log("fetchvideos");
    const options = {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "multipart/form-data",
      },
      body: {
        name: value,
      },
    };
    console.log(options);
    const res = await axios.post(
      "https://subbackend2.herokuapp.com/search",
      options
    );
    setVideolist(res.data);
    setcurrentlist(Videolist.slice(0, 10));
  };

  return (
    <div className="main-div">
      <div className="search-bar">
        <input
          type="text"
          onChange={(e) => setvalue(e.target.value)}
          name="name"
        />
        <br />
        <input
          className="button3"
          type="submit"
          value="Submit"
          onClick={() => fetchvideos()}
        />
      </div>
      <div className="flex">
        {currentlist.map((i) => (
          <div key={i.index} className="video-box">
            <YouTube opts={opts} videoId={i} />
          </div>
        ))}
      </div>
      <br />
      <Scroler getcurr={getcurrentpage} />
    </div>
  );
};

export default App;
