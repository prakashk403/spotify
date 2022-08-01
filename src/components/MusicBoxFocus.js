import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "../styles/MusicBox.css";
import MusicCard from "./MusicCard";

function MusicBox() {
  let history = useHistory();
  const [mood, setMood] = useState([
    {
      artist: "Relax and indilge with beautiful piano music",
      title: "Peaceful Piano",
      description: "",
      image: "/assets/mood-img-1.png",
      id: 6,
    },
    {
      artist: "Keep calm and focus with this soothing music",
      title: "Deep Focus",
      description: "",
      image: "/assets/mood-img-2.png",
      id: 7,
    },
    {
      artist: "A soft music backdrop for your studies",
      title: "Instrumental Study",
      description: "",
      image: "/assets/mood-img-3.png",
      id: 8,
    },
    {
      artist: "Let your mind relax with good beats",
      title: "Lofi Beats",
      description: "",
      image: "/assets/mood-img-4.png",
      id: 9,
    },
    {
      artist: "Focus enhancing piano for your relaxation and studies",
      title: "Intense Studying",
      description: "",
      image: "/assets/mood-img-5.png",
      id: 10,
    },
  ]);

  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">Focus</h1>
          <div className="see-all-div-second">
            <p className="see-all">
              <p>Music to help you concentrate. </p>
            </p>
            <p className="see-all sec-see-all">
              <a onClick={() => history.push("/")}>HIDE</a>
            </p>
          </div>
          <div className="cards">
            {mood.map((ele) => (
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
