import React, { useState, useEffect } from "react";
import "../styles/MusicBox.css";
import "../styles/MusicCard.css";
import "../styles/Search.css";

function MusicBox(props) {
  useEffect(() => {
    document.getElementsByClassName("search-bar-top-nav")[0].style.opacity =
      "1";
    let imageData = [
      { img: "/assets/s1.png", text: "Podcasts" },
      { img: "/assets/s2.png", text: "Made For You" },
      { img: "/assets/s3.png", text: "Charts" },
      { img: "/assets/s4.png", text: "New Releases" },
      { img: "/assets/s5.png", text: "Discover" },
      { img: "/assets/s6.png", text: "Bollywood" },
      { img: "/assets/s7.png", text: "Punjabi" },
      { img: "/assets/s8.png", text: "Tamil" },
      { img: "/assets/s9.png", text: "Telgu" },
      { img: "/assets/s10.png", text: "Indie" },
      { img: "/assets/s11.png", text: "Gaming" },
      { img: "/assets/s12.png", text: "Equal" },
      { img: "/assets/s13.png", text: "Pop" },
      { img: "/assets/s14.png", text: "Radar" },
      { img: "/assets/s15.png", text: "Fresh Mind" },
      { img: "/assets/s16.png", text: "Marathi" },
      { img: "/assets/s17.png", text: "Wellness" },
      { img: "/assets/s18.png", text: "Devotional" },
      { img: "/assets/s19.png", text: "Indian Classical" },
      { img: "/assets/s20.png", text: "Romance" },
      { img: "/assets/s21.png", text: "Happy Hoilidays" },
      { img: "/assets/s22.png", text: "Decades" },
      { img: "/assets/s23.png", text: "K-pop" },
      { img: "/assets/s24.png", text: "Diseny" },
      { img: "/assets/s25.png", text: "Netflix" },
    ];
    if (props.query.length === 0) {
      setImage(imageData);
    } else {
      setImage([]);
      let arr = [];

      imageData.forEach((element) => {
        if (
          element.text.toLowerCase().includes(props.query.toLowerCase()) &&
          !arr.some((e) => e.text.toLowerCase() === element.text.toLowerCase())
        ) {
          let newImage = [...arr, element];
          arr.push(element);
          setImage(newImage);
        }
      });
    }
  }, [props]);
  const [image, setImage] = useState([]);

  return (
    <div>
      <div id="music-box">
        <div id="music-box-content">
          <h1 className="font">Browse all</h1>
          <div className="see-all-div">
            <p className="see-all">
              <a></a>
            </p>
          </div>
          <div className="cards">
            {image.map((ele) => (
              <div key={(Math.random() + 1).toString(36).substring(7)}>
                <div className="music-card-warpper music-card-warpper-search">
                  <div className="music-card">
                    <div className="music-card-image">
                      <img className="music-img" src={ele.img} alt="music" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBox;
