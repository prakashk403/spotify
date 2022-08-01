import { useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/MusicBox.css";
import MusicCard from "./MusicCard";

function MusicBox() {
  let location = useLocation();
  useEffect(() => {
    document.getElementsByClassName("search-bar-top-nav")[0].style.opacity =
      "0";
  }, []);
  useEffect(() => {
    let currURL = window.location.pathname;
    let id = currURL.split("/")[2];
    let action = currURL.split("/")[3];
    if (currURL.includes("/play")) {
      if (Number(id) - 1 === 0 && action === "play") {
        setM0Play(true);
        setM1Play(false);
        setM2Play(false);
        setM3Play(false);
        setM4Play(false);
      } else if (Number(id) - 1 === 1 && action === "play") {
        setM0Play(false);
        setM1Play(true);
        setM2Play(false);
        setM3Play(false);
        setM4Play(false);
      } else if (Number(id) - 1 === 2 && action === "play") {
        setM0Play(false);
        setM1Play(false);
        setM2Play(true);
        setM3Play(false);
        setM4Play(false);
      } else if (Number(id) - 1 === 3 && action === "play") {
        setM0Play(false);
        setM1Play(false);
        setM2Play(false);
        setM3Play(true);
        setM4Play(false);
      } else if (Number(id) - 1 === 4 && action === "play") {
        setM0Play(false);
        setM1Play(false);
        setM2Play(false);
        setM3Play(false);
        setM4Play(true);
      }
    }
  }, [location, window.location.pathname]);
  let history = useHistory();

  const [m0Play, setM0Play] = useState(false);
  const [m1Play, setM1Play] = useState(false);
  const [m2Play, setM2Play] = useState(false);
  const [m3Play, setM3Play] = useState(false);
  const [m4Play, setM4Play] = useState(false);

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
  const handleMusic = (ele, action) => {
    if (Number(ele.id) - 1 === 0 && action === "stop") {
      setM0Play(false);
    } else if (Number(ele.id) - 1 === 1 && action === "stop") {
      setM1Play(false);
    } else if (Number(ele.id) - 1 === 2 && action === "stop") {
      setM2Play(false);
    } else if (Number(ele.id) - 1 === 3 && action === "stop") {
      setM3Play(false);
    } else if (Number(ele.id) - 1 === 4 && action === "stop") {
      setM4Play(false);
    }
    if (Number(ele.id) - 1 === 0 && action === "play") {
      setM0Play(true);
      setM1Play(false);
      setM2Play(false);
      setM3Play(false);
      setM4Play(false);
    } else if (Number(ele.id) - 1 === 1 && action === "play") {
      setM0Play(false);
      setM1Play(true);
      setM2Play(false);
      setM3Play(false);
      setM4Play(false);
    } else if (Number(ele.id) - 1 === 2 && action === "play") {
      setM0Play(false);
      setM1Play(false);
      setM2Play(true);
      setM3Play(false);
      setM4Play(false);
    } else if (Number(ele.id) - 1 === 3 && action === "play") {
      setM0Play(false);
      setM1Play(false);
      setM2Play(false);
      setM3Play(true);
      setM4Play(false);
    } else if (Number(ele.id) - 1 === 4 && action === "play") {
      setM0Play(false);
      setM1Play(false);
      setM2Play(false);
      setM3Play(false);
      setM4Play(true);
    }
    history.push(`/music/${ele.id}/${action}`);
  };
  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">New Releases</h1>
          <div className="see-all-div">
            <p className="see-all">
              <a onClick={() => history.push("/new-release")}>SEE ALL</a>
            </p>
          </div>
          <div className="cards">
            <MusicCard
              handleMusic={handleMusic}
              music={music[0]}
              playing={m0Play}
              className="cards__item"
              key={music[0].id}
            />
            <MusicCard
              handleMusic={handleMusic}
              music={music[1]}
              playing={m1Play}
              className="cards__item"
              key={music[1].id}
            />
            <MusicCard
              handleMusic={handleMusic}
              music={music[2]}
              playing={m2Play}
              className="cards__item"
              key={music[2].id}
            />
            <MusicCard
              handleMusic={handleMusic}
              music={music[3]}
              playing={m3Play}
              className="cards__item"
              key={music[3].id}
            />
            <MusicCard
              handleMusic={handleMusic}
              music={music[4]}
              playing={m4Play}
              className="cards__item"
              key={music[4].id}
            />
          </div>
          <br />
          <h1 className="font">Focus</h1>
          <div className="see-all-div-second">
            <p className="see-all">
              <p>Music to help you concentrate. </p>
            </p>
            <p className="see-all sec-see-all">
              <a onClick={() => history.push("/focus")}>SEE ALL</a>
            </p>
          </div>
          <div className="cards">
            {mood.map((ele) => (
              <MusicCard music={ele} className="cards__item" key={ele.id} />
            ))}
          </div>
          <br />
          <h1 className="font">Mood</h1>
          <div className="see-all-div-second">
            <p className="see-all">
              <p>Playlist to match your mood. </p>
            </p>
            <p className="see-all sec-see-all">
              <a onClick={() => history.push("/mood")}>SEE ALL</a>
            </p>
          </div>
          <div className="cards">
            {extramood.map((ele) => (
              <MusicCard music={ele} className="cards__item" key={ele.id} />
            ))}
          </div>
          <br />
          <h1 className="font">Rock you home</h1>
          <div className="see-all-div">
            <p className="see-all">
              <a onClick={() => history.push("/rock-home")}>SEE ALL</a>
            </p>
          </div>
          <div className="cards">
            {homemusic.map((ele) => (
              <MusicCard music={ele} className="cards__item" key={ele.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBox;
