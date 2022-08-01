import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "../styles/MusicBox.css";
import MusicCard from "./MusicCard";

function MusicBox() {
  let history = useHistory();
  const [extramood, setExtraMood] = useState([
    {
      artist: "Get Happy with today's mood booster music",
      title: "Mood Booster",
      description: "",
      image: "/assets/exmood-img-1.png",
      id: 11,
    },
    {
      artist: "Feel good with this positively charged music",
      title: "Feeling Good",
      description: "",
      image: "/assets/exmood-img-2.png",
      id: 12,
    },
    {
      artist: "Calm positive piano music for your good mood",
      title: "Feel Good Piano",
      description: "",
      image: "/assets/exmood-img-4.png",
      id: 13,
    },
    {
      artist: "Beautiful dark dramatic tracks",
      title: "Dark & Stromy",
      description: "",
      image: "/assets/exmood-img-3.png",
      id: 14,
    },
    {
      artist: "Tamil happy vibes music with upliftment tracks",
      title: "Happy Vibe",
      description: "",
      image: "/assets/exmood-img-5.png",
      id: 15,
    },
  ]);
  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">Mood</h1>
          <div className="see-all-div-second">
            <p className="see-all">
              <p>Playlist to match your mood. </p>
            </p>
            <p className="see-all sec-see-all">
              <a onClick={() => history.push("/")}>HIDE</a>
            </p>
          </div>
          <div className="cards">
            {extramood.map((ele) => (
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
