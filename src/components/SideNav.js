import { useHistory } from "react-router-dom";
import "../styles/SideNav.css";
import Icon from "@mdi/react";
import { mdiHomeVariant } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiBookshelf } from "@mdi/js";
import { mdiPlusBox } from "@mdi/js";
import { mdiHeartBoxOutline } from "@mdi/js";

function SideNav() {
  let history = useHistory();
  return (
    <div>
      <div id="side-nav">
        <div id="side-nav-content">
          <div id="side-nav-header">
            <div id="side-nav-header-logo">
              <img src={"/assets/spotify-logo.png"} width="100" alt="logo" />
            </div>
          </div>
          <div id="side-nav-body">
            <div id="side-nav-body-content">
              <div onClick={() => history.push("/")} className="side-nav-body-content-item home">
                <div className="side-nav-body-content-item-icon">
                  <Icon
                    path={mdiHomeVariant}
                    size={1.2}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                </div>
                <div className="side-nav-body-content-item-text">
                  <p>Home</p>
                </div>
              </div>
              <div onClick={() => history.push("/search")} className="side-nav-body-content-item search-bar">
                <div className="side-nav-body-content-item-icon">
                  <Icon
                    path={mdiMagnify}
                    size={1.3}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                </div>
                <div className="side-nav-body-content-item-text search">
                  <p>Search</p>
                </div>
              </div>
              <div className="side-nav-body-content-item lib-bar">
                <div className="side-nav-body-content-item-icon icon">
                  <Icon
                    path={mdiBookshelf}
                    size={1.0}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                </div>
                <div className="side-nav-body-content-item-text lib">
                  <p>Your Library</p>
                </div>
              </div>
              <br />
              <div className="side-nav-body-content-item cp-bar">
                <div className="side-nav-body-content-item-icon">
                  <Icon
                    path={mdiPlusBox}
                    size={1.1}
                    horizontal
                    vertical
                    rotate={-180}
                  />
                </div>
                <div className="side-nav-body-content-item-text create">
                  <p>Create Playlist</p>
                </div>
              </div>
              <div className="side-nav-body-content-item like-bar">
                <div className="side-nav-body-content-item-icon">
                  <Icon
                    path={mdiHeartBoxOutline}
                    size={1.1}
                    horizontal
                    vertical
                    rotate={-180}
                    className="icon-like"
                  />
                </div>
                <div className="side-nav-body-content-item-text create">
                  <p>Liked Songs</p>
                </div>
              </div>
            </div>
            <div id="side-nav-body-footer">
              <div id="side-nav-body-footer-text">
                <p id="cookies">Cookies</p>
                <p id="privacy">Privacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
