import "../styles/MusicCard.css";
import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";
import { mdiStopCircle } from "@mdi/js";
import React, { useState } from "react";

function MusicCard(props) {
  const handlePlay = (e) => {
    let action = "play";
    let url = window.location.pathname.split("/");
    if (url.length >= 4 && url[3] === "play" && url[2] == props.music.id) {
      action = "stop";
    }
    if (Object.keys(props).length > 2) {
      props.handleMusic(props.music, action);
    }
  };
  return (
    <div>
      <div className="music-card-warpper">
        <div className="music-card">
          <div className="music-card-image">
            {/* <img
              className="music-img"
              src="https://picsum.photos/180/174"
              alt="music"
            /> */}
            <img className="music-img" src={props.music.image} alt="music" />
            <div className="logo-div">
              {" "}
              <img src={"/assets/small-logo.png"} width="25" alt="logo" />{" "}
            </div>
            <div
              className={
                props.playing ? "button-wrapper-play" : "button-wrapper"
              }
            >
              <button className="button" onClick={(e) => handlePlay(e)}>
                {props.playing ? (
                  <Icon
                    className="btn-icon"
                    path={mdiStopCircle}
                    size={1.2}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                ) : (
                  <Icon
                    className="btn-icon"
                    path={mdiPlay}
                    size={1.2}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="music-card-info">
            <div className="music-card-title">
              <h3>{props.music.title}</h3>
            </div>
            <div className="music-card-artist">
              <h4>{props.music.artist}</h4>
            </div>
            <div className="music-card-description">
              <h4>{props.music.description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
