import "../styles/PlayerNav.css";
import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { mdiShuffle } from "@mdi/js";
import { mdiChevronDoubleLeft } from "@mdi/js";
import { mdiChevronDoubleRight } from "@mdi/js";
import { mdiPlayCircleOutline } from "@mdi/js";
import { mdiRepeatVariant } from "@mdi/js";
import { mdiFormatListGroupPlus } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import { mdiPauseCircleOutline } from "@mdi/js";

function PlayerNav(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    artist: "N/A",
    title: "N/A",
  });

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    document.getElementById("track-range").value = props.width / 100;
  }, [props.width, props.isPlaying]);

  useEffect(() => {
    if (props.currentSongIndex !== -1) {
      let currSong = props.currenPlaying;
      console.log(currSong);
      setCurrentSong(currSong);
      setCurrentSongIndex(props.currentSongIndex);
      setIsPlaying(props.isPlaying);
    }
  }, [props.currenPlaying, props.currentSongIndex, props.isPlaying]);

  useEffect(() => {
    document.getElementById("volume-range").value = props.vol;
    setVolume(props.vol);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    props.playSound();
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
    props.pauseSound();
    setIsPlaying(false);
  };
  const handleNext = () => {
    setIsPlaying(true);
    props.nextSound();
  };
  const handlePrevious = () => {
    setIsPlaying(true);
    props.prevSound();
  };
  const handleVolume = () => {
    let vol = document.getElementById("volume-range").value;
    setVolume(vol);
    props.setvolume(vol);
  };
  const handleSeek = () => {
    let seek = document.getElementById("track-range").value;
    props.seekSound(seek);
  };
  return (
    <div>
      <div id="player-nav">
        <div id="player-nav-content">
          <div className="player-wrapper">
            <div className="player-wrapper-left">
              <div className="song-name">
                <span>{currentSong.title}</span>
                <br />
                <span>{currentSong.artist}</span>
              </div>
              <div className="like-icon-player">
                <Icon
                  className="btn-icon"
                  path={mdiHeart}
                  size={0.8}
                  horizontal
                  vertical
                  rotate={-180}
                  color="green"
                />
              </div>
            </div>
            <div className="player-wrapper-middle">
              <div className="controls-btn">
                <Icon
                  className="control-icon"
                  path={mdiShuffle}
                  size={0.8}
                  horizontal
                  vertical
                  rotate={-180}
                />
                <Icon
                  className="control-icon"
                  path={mdiChevronDoubleLeft}
                  size={1.2}
                  horizontal
                  vertical
                  rotate={-180}
                  onClick={handlePrevious}
                />

                {!isPlaying ? (
                  <Icon
                    className="control-icon"
                    path={mdiPlayCircleOutline}
                    size={1.2}
                    horizontal
                    vertical
                    rotate={-180}
                    onClick={handlePlay}
                  />
                ) : (
                  <Icon
                    className="control-icon"
                    path={mdiPauseCircleOutline}
                    size={1.2}
                    horizontal
                    vertical
                    rotate={-180}
                    onClick={handlePause}
                  />
                )}
                <Icon
                  className="control-icon"
                  path={mdiChevronDoubleRight}
                  size={1.2}
                  horizontal
                  vertical
                  rotate={-180}
                  onClick={handleNext}
                />
                <Icon
                  className="control-icon"
                  path={mdiRepeatVariant}
                  size={0.8}
                  horizontal
                  vertical
                  rotate={-180}
                />
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill">
                  <input
                    id="track-range"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={handleSeek}
                  />
                </div>
              </div>
            </div>
            <div className="player-wrapper-right">
              <div className="volume-icon">
                <Icon
                  className="btn-icon-right"
                  path={mdiFormatListGroupPlus}
                  size={0.8}
                  rotate={0}
                />
                <Icon
                  className="btn-icon-right"
                  path={mdiVolumeHigh}
                  size={0.8}
                  horizontal
                  vertical
                  rotate={-180}
                />
              </div>
              <div className="volume-bar">
                <input
                  id="volume-range"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={handleVolume}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerNav;
