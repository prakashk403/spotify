import { useHistory } from "react-router-dom";
import "../styles/TopNav.css";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";

function TopNav({ onClickCallback }) {
  let history = useHistory();
  return (
    <div>
      <div id="top-nav">
        <div id="top-nav-content">
          <div className="button-wrapper-top-nav">
            <button
              onClick={() => history.push("/")}
              className="button-top-nav"
            >
              <Icon
                className="icon-top-nav"
                path={mdiChevronLeft}
                size={1.1}
                horizontal
                vertical
                rotate={-180}
              />
            </button>
            <button className="button-top-nav">
              <Icon
                className="icon-top-nav-two"
                path={mdiChevronRight}
                size={1.1}
                horizontal
                vertical
                rotate={-180}
              />
            </button>
            <div className="search-bar-top-nav">
              <div className="search-bar-top-nav-content">
                <span className="search-bar-top-nav-span">
                  <Icon
                    path={mdiMagnify}
                    size={1.3}
                    horizontal
                    vertical
                    rotate={-180}
                    color="black"
                  />
                </span>
                <input
                  onChange={(e) => onClickCallback(e)}
                  type="text"
                  placeholder="Artists, songs or podcasts"
                />
              </div>
            </div>
          </div>
          <div className="right-btns">
            <button id="signup" className="font">
              Sign up
            </button>
            <button id="login" className="font">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
