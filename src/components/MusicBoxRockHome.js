import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "../styles/MusicBox.css";
import MusicCard from "./MusicCard";

function MusicBox() {
  let history = useHistory();
  const [homemusic, setHomeMusic] = useState([
    {
      artist: "A musical tribute to all the care givers",
      title: "Dil Se Thank you",
      description: "",
      image: "/assets/hcard-img-1.png",
      id: 16,
    },
    {
      artist: "Bittersweet life made easy with this music",
      title: "Zindgi Anthem",
      description: "",
      image: "/assets/hcard-img-2.png",
      id: 17,
    },
    {
      artist: "Perfect sleep riding theta brain waves",
      title: "REM Sleep",
      description: "",
      image: "/assets/hcard-img-3.png",
      id: 18,
    },
    {
      artist: "Songs for good night's sleep",
      title: "Subh Night",
      description: "",
      image: "/assets/hcard-img-4.png",
      id: 19,
    },
    {
      artist: "Hottest hindi music serve here",
      title: "Hot Hits Hindi",
      description: "",
      image: "/assets/hcard-img-5.png",
      id: 20,
    },
  ]);
  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">Rock you home</h1>
          <div className="see-all-div">
            <p className="see-all">
              <a onClick={() => history.push("/")}>HIDE</a>
            </p>
          </div>
          <div className="cards">
            {homemusic.map((ele) => (
              <MusicCard music={ele} className="cards__item" key={ele.id} />
            ))}
            {[...Array(10)].map((ele) => (
              <MusicCard
                music={{
                  artist: "Dummy Artist",
                  title: "Dummy Title",
                  description: "Dummy Description",
                  image: "https://picsum.photos/175/174",
                }}
                className="cards__item"
                key={(Math.random() + 1).toString(36).substring(7)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBox;
