import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "../styles/MusicBox.css";
import MusicCard from "./MusicCard";

function MusicBox() {
  let history = useHistory();
  const [music, setMusic] = useState([
    {
      artist: "Tulsi Kumar Darshan",
      title: "Tera Naam",
      description: "The finest quality of music",
      image: "/assets/card-img-1.png",
      id: 1,
    },
    {
      artist: "Jubin Nautiyal",
      title: "Dil Galti Kar",
      description: "With Meet Bros and S Rathod",
      image: "/assets/card-img-2.png",
      id: 2,
    },
    {
      artist: "Jubin Nautiyal Tanishk",
      title: "Lut Gaye",
      description: "With Nusrat Fatheh Ali",
      image: "/assets/card-img-3.png",
      id: 3,
    },
    {
      artist: "Harrdy Sandhu",
      title: "Biljlee Biljlee",
      description: "With Desi & Punjabi-pop",
      image: "/assets/card-img-4.png",
      id: 4,
    },
    {
      artist: "Stebin Ben Nilesh",
      title: "Thoda Thoda Pyar",
      description: "With Crush Love Story",
      image: "/assets/card-img-5.png",
      id: 5,
    },
  ]);

  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">New Releases</h1>
          <div className="see-all-div">
            <p className="see-all">
              <a onClick={() => history.push("/")}>HIDE</a>
            </p>
          </div>
          <div className="cards">
            {music.map((ele) => (
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
