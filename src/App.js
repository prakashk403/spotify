import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Home from "./views/Home";
import NewRelease from "./views/NewRelease";
import Focus from "./views/Focus";
import Mood from "./views/Mood";
import RockHome from "./views/RockHome";
import Search from "./views/Search";
import PlayerNav from "./components/PlayerNav";
import { Howl, Howler } from "howler";

function App() {
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [songs, setSongs] = useState([
    "/sounds/sound1.mp3",
    "/sounds/sound2.mp3",
    "/sounds/sound3.mp3",
    "/sounds/sound4.mp3",
    "/sounds/sound5.mp3",
  ]);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [seekWidth, setSeekWidth] = useState(0);
  const [random, setRandom] = useState(0);

  const [sound, setSound] = useState(
    new Howl({
      src: songs[0],
      autoplay: false,
      loop: false,
      volume: 0.2,
      onend: () => {
        nextSound();
      },
    })
  );

  useEffect(() => {
    let inv = null;
    clearInterval(inv);
    inv = setInterval(() => {
      if (sound.playing()) {
        let width = (sound.seek() / sound.duration()) * 100;
        setSeekWidth(width);
      }
    }, 1000);
  }, [currentSongIndex, random]);

  useEffect(() => {
    let prevURL = "";

    setInterval(() => {
      let currURL = window.location.pathname;
      if (prevURL != currURL && currURL !== "/" && currURL !== "") {
        document.getElementById("player-nav").style.opacity = "1";
        document.getElementById("player-nav").style.zIndex = "99";
        prevURL = currURL;
        updateURL(currURL);
        console.log(currURL, prevURL);
      }
    }, 1000);
  }, []);

  const updateURL = (url) => {
    let action = url.split("/")[3];
    if (action === "play") {
      playSongURL(url);
    }
    if (action === "stop") {
      pauseSongURL(url);
    }
  };

  const playSongURL = (url) => {
    setRandom((Math.random() + 1).toString(36).substring(7));

    let songIndex = Number(url.split("/")[2]) - 1;
    setCurrentSongIndex(songIndex);
    setIsPlaying(true);
    Howler.stop();
    // Howler.unload();
    let music = new Howl({
      src: songs[songIndex],
      autoplay: false,
      loop: false,
      volume: 0.5,
      onend: () => {
        nextSound();
      },
    });
    setSound(music);
    music.play();
    setIsPlaying(true);
  };

  const pauseSongURL = (url) => {
    sound.pause();
    Howler.stop();
    setIsPlaying(false);
  };

  let setvolume = (val) => {
    sound.volume(val);
  };
  let playSound = () => {
    setVolume(sound.volume());
    sound.play();
    setIsPlaying(true);
  };
  let pauseSound = () => {
    sound.pause();
    setIsPlaying(false);
  };
  let nextSound = () => {
    let currURL = window.location.pathname;
    let id = currURL.split("/")[2];
    let action = currURL.split("/")[3];

    if (id === "5" && action === "play") {
      let currURL = window.location.pathname;
      let action = currURL.split("/")[3];
      window.history.pushState(null, null, "/music/1" + "/" + action);
    } else {
      window.history.pushState(
        null,
        null,
        "/music/" + (Number(id) + 1) + "/" + action
      );
    }
  };
  let prevSound = () => {
    if (currentSongIndex === 0) return;
    let currURL = window.location.pathname;
    let id = currURL.split("/")[2];
    let action = currURL.split("/")[3];

    window.history.pushState(
      null,
      null,
      "/music/" + (Number(id) - 1) + "/" + action
    );
  };
  let seekSound = (val) => {
    if (sound.playing()) {
      sound.seek(sound.duration() * val);
    }
  };
  return (
    <>
      <BrowserRouter>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/music" component={Home} />
          <Route path="/new-release" exact component={NewRelease} />
          <Route path="/focus" exact component={Focus} />
          <Route path="/mood" exact component={Mood} />
          <Route path="/rock-home" exact component={RockHome} />
          <Route path="/search" exact component={Search} />
        </>
      </BrowserRouter>
      <PlayerNav
        id="player-nav"
        playSound={playSound}
        pauseSound={pauseSound}
        nextSound={nextSound}
        prevSound={prevSound}
        setvolume={setvolume}
        seekSound={seekSound}
        isPlaying={isPlaying}
        width={seekWidth}
        vol={volume}
        currenPlaying={music[currentSongIndex]}
        currentSongIndex={currentSongIndex}
      />
    </>
  );
}

export default App;
