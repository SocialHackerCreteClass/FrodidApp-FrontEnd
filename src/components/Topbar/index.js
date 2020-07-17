import React from "react"

function Topbar(props) {
  return (
    <div className="c-app-topbar">
      <div className="o-grid o-grid--middle">
        <div className="o-grid__cell u-1/1 u-2/3@desktop">
          <form className="c-form c-form--search">
            <input
              type="search"
              id="search"
              placeholder="Search..."
              className="u-margin-bottom-tiny u-margin-bottom-none@l-mobile u-margin-right-small@l-mobile"
            />
            <button type="submit" className="c-btn c-btn--primary c-btn--small">
              Submit
            </button>
          </form>
        </div>
        <div className="o-grid__cell u-hide u-show@desktop u-1/3@desktop">
          <div className="o-flag o-flag--small o-flag--right">
            <div className="o-flag__img u-hide u-show@l-desktop">
              <div className="c-avatar c-avatar--img">
                <div className="c-avatar__img">
                  <img src="https://placekitten.com/300/300" alt="avatar" />
                </div>
              </div>
            </div>
            <div className="o-flag__body">
              <p className="u-margin-bottom-tiny">Konstantinos Antoniadis</p>
              <ul className="o-list-inline u-margin-bottom-none u-xsmall">
                <li className="o-list-inline__item u-margin-right-tiny@tablet">
                  <a href="#">Edit profile</a>
                </li>
                <li className="o-list-inline__item u-hide u-display-inline-block@tablet">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
