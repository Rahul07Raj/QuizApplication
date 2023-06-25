import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const [currVideo, setCurrVideo] = useState(0);
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  const videos = [
    {
      vid: "https://www.youtube.com/watch?v=jZK-ollGjlQ",
    },
    {
      vid: "https://www.youtube.com/watch?v=kP99SW7C3-k",
    },
    {
      vid: "https://www.youtube.com/watch?v=oE4g4P41KLM",
    },
    {
      vid: "https://www.youtube.com/watch?v=yVTNge3sXpg",
    },
    {
      vid: "https://www.youtube.com/watch?v=id00R-3OmJ0",
    },
  ];

  const updateVideo = () => {
    if (desc) {
      if (currVideo + 1 < videos.length) {
        setCurrVideo(currVideo + 1);
      } else {
        alert("you finished all the videos");
        navigate("/text_quiz");
      }
    } else {
      alert("please review it!!!");
    }
  };

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  return (
    <div className="video">
      <div className="left-side">
        <h1>
          {" "}
          Video: {currVideo + 1} out of {videos.length}
        </h1>
        <ReactPlayer controls url={videos[currVideo].vid} />
        <div className="button" style={{ marginTop: "10px" }}>
          <button id="btn" style={{ margin: "10px" }}
           onClick={()=>{
            if(currVideo+1>1){
              setCurrVideo(currVideo-1);
            }
           }}
          >
            Pre
          </button>
          <button
            id="btn"
            onClick={() => {
              if (currVideo + 1 < videos.length) {
                setCurrVideo(currVideo + 1);
              } else {
                alert("this is last video");
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div className="right-side">
        <textarea
          name=""
          id="input"
          cols="60"
          rows="10"
          onChange={handleChange}
          value={desc}
          placeholder="Write description regarding video"
        ></textarea>
        <button
          id="btn"
          onClick={() => {
            updateVideo();
            setDesc("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Video;
