import React from "react"
import PropTypes from "prop-types"

LayoutDefault.propTypes = {
  children: PropTypes.node
}

function LayoutDefault(props) {
  return (
    <div className="g-app">
      <div className="c-app-header c-app__header--mobile u-hide@desktop">
        <div className="u-padding-horizontal-tiny u-padding-vertical-small u-text-align-center">
          <div className="u-margin-bottom">
            <a href="/" title="Frontidapp">
              <svg className="c-logo c-logo--mobile">
                <use href="#icon-logo-small"></use>
              </svg>
            </a>
          </div>
          <div className="u-margin-bottom">
            <a href="#" title="Konstantinos Antoniadis">
              <span className="c-avatar c-avatar--mobile">
                <span className="c-avatar__img">
                  <span className="u-uppercase u-bold">KA</span>
                </span>
              </span>
            </a>
          </div>
          <nav>
            <h2 className="u-hidden-visually">Navigation</h2>
            <h3 className="u-hidden-visually">Pages</h3>
            <ul className="o-list-bare u-margin-bottom">
              <li className="u-margin-bottom-small">
                <a href="patients.html">
                  <svg className="c-icon">
                    <use
                      className="c-icon--primary"
                      href="#icon-patients"></use>
                  </svg>
                </a>
              </li>
              <li className="u-margin-bottom-small">
                <a href="/professionals">
                  <svg className="c-icon">
                    <use
                      className="c-icon--primary"
                      href="#icon-professionals"></use>
                  </svg>
                </a>
              </li>
              <li className="u-margin-bottom-small">
                <a href="/visitations">
                  <svg className="c-icon">
                    <use
                      className="c-icon--primary"
                      href="#icon-visitations"></use>
                  </svg>
                </a>
              </li>
              <li className="u-margin-bottom-small">
                <a href="/analytics">
                  <svg className="c-icon">
                    <use
                      className="c-icon--primary"
                      href="#icon-analytics"></use>
                  </svg>
                </a>
              </li>
            </ul>
            <h3 className="u-hidden-visually">Actions</h3>
            <ul className="o-list-bare u-margin-bottom">
              <li className="u-margin-bottom-small">
                <a href="/patients/create-new">
                  <svg className="c-icon">
                    <use
                      className="c-icon--secondary"
                      href="#icon-patients"></use>
                  </svg>
                </a>
              </li>
              <li className="u-margin-bottom-small">
                <a href="/professionals/create-new">
                  <svg className="c-icon">
                    <use
                      className="c-icon--secondary"
                      href="#icon-professionals"></use>
                  </svg>
                </a>
              </li>
              <li className="u-margin-bottom-small">
                <a href="/visitations/create-new">
                  <svg className="c-icon">
                    <use
                      className="c-icon--secondary"
                      href="#icon-visitations"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="c-app-header c__app-header--desktop u-hide u-show@desktop">
        <div className="u-padding-small u-margin-bottom-large">
          <a href="/" title="Frontidapp">
            <svg className="c-logo">
              <use href="#icon-logo"></use>
            </svg>
          </a>
        </div>
        <nav>
          <h2 className="u-hidden-visually">Navigation</h2>
          <div className="u-padding-left-small">
            <h3 className="c-label c-label--small">Pages</h3>
          </div>
          <div className="u-margin-bottom-large">
            <ul className="o-list-bare">
              <li>
                <a
                  href="patients.html"
                  className="c-main-nav__link c-main-nav__link--primary c-main-nav__link--primary-active">
                  <div className="u-padding-vertical-small u-padding-left-small">
                    <div className="o-flag o-flag--small">
                      <div className="o-flag__img">
                        <svg className="c-icon">
                          <use
                            className="c-icon--primary"
                            href="#icon-patients"></use>
                        </svg>
                      </div>
                      <div className="o-flag__body">
                        <span className="c-main-nav__text">patients</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/professionals"
                  className="c-main-nav__link c-main-nav__link--primary">
                  <div className="u-padding-vertical-small u-padding-left-small">
                    <div className="o-flag o-flag--small">
                      <div className="o-flag__img">
                        <svg className="c-icon">
                          <use
                            className="c-icon--primary"
                            href="#icon-professionals"></use>
                        </svg>
                      </div>
                      <div className="o-flag__body">
                        <span className="c-main-nav__text">professionals</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/visitations"
                  className="c-main-nav__link c-main-nav__link--primary">
                  <div className="u-padding-vertical-small u-padding-left-small">
                    <div className="o-flag o-flag--small">
                      <div className="o-flag__img">
                        <svg className="c-icon">
                          <use
                            className="c-icon--primary"
                            href="#icon-visitations"></use>
                        </svg>
                      </div>
                      <div className="o-flag__body">
                        <span className="c-main-nav__text">visitations</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/analytics"
                  className="c-main-nav__link c-main-nav__link--primary">
                  <div className="u-padding-vertical-small u-padding-left-small">
                    <div className="o-flag o-flag--small">
                      <div className="o-flag__img">
                        <svg className="c-icon">
                          <use
                            className="c-icon--primary"
                            href="#icon-analytics"></use>
                        </svg>
                      </div>
                      <div className="o-flag__body">
                        <span className="c-main-nav__text">analytics</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="u-padding-left-small">
            <h3 className="c-label c-label--small">Actions</h3>
          </div>
          <ul className="o-list-bare">
            <li>
              <a
                href="/create-new/patients"
                className="c-main-nav__link c-main-nav__link--secondary">
                <div className="u-padding-vertical-small u-padding-left-small">
                  <div className="o-flag o-flag--small">
                    <div className="o-flag__img">
                      <svg className="c-icon">
                        <use
                          className="c-icon--secondary"
                          href="#icon-patients"></use>
                      </svg>
                    </div>
                    <div className="o-flag__body">
                      <span className="c-main-nav__text">patients</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/create-new/professionals"
                className="c-main-nav__link c-main-nav__link--secondary">
                <div className="u-padding-vertical-small u-padding-left-small">
                  <div className="o-flag o-flag--small">
                    <div className="o-flag__img">
                      <svg className="c-icon">
                        <use
                          className="c-icon--secondary"
                          href="#icon-professionals"></use>
                      </svg>
                    </div>
                    <div className="o-flag__body">
                      <span className="c-main-nav__text">professionals</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/create-new/visitations"
                className="c-main-nav__link c-main-nav__link--secondary">
                <div className="u-padding-vertical-small u-padding-left-small">
                  <div className="o-flag o-flag--small">
                    <div className="o-flag__img">
                      <svg className="c-icon">
                        <use
                          className="c-icon--secondary"
                          href="#icon-visitations"></use>
                      </svg>
                    </div>
                    <div className="o-flag__body">
                      <span className="c-main-nav__text">visitations</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="c-app-content">
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
                <button
                  type="submit"
                  className="c-btn c-btn--primary c-btn--small">
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
                  <p className="u-margin-bottom-tiny">
                    Konstantinos Antoniadis
                  </p>
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
        <div className="c-app-main">{props.children}</div>
        <div className="c-app-footer">
          <div className="o-grid">
            <div className="o-grid__cell u-1/1 u-1/2@l-wide">
              <div className="u-margin-bottom u-margin-bottom-none@l-wide">
                <ul className="o-list-inline u-margin-bottom-none">
                  <li className="o-list-inline__item u-margin-right u-margin-bottom-small u-margin-bottom-none@l-wide">
                    <div className="o-flag o-flag--small">
                      <div className="o-flag__img">
                        <svg className="c-icon c-icon--small">
                          <use
                            className="c-icon--white"
                            href="#icon-mail"></use>
                        </svg>
                      </div>
                      <div className="o-flag__body">
                        <a
                          href="mailto:support@frontidapp.gr"
                          className="u-white">
                          support@frontidapp.gr
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="o-list-inline__item u-margin-bottom-small u-margin-bottom-none@l-wide">
                    <div className="o-flag o-flag--small">
                      <div className="o-flag__img">
                        <svg className="c-icon c-icon--small">
                          <use
                            className="c-icon--white"
                            href="#icon-phone"></use>
                        </svg>
                      </div>
                      <div className="o-flag__body">
                        <span className="u-white">0030 2810 223 555</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="o-grid__cell u-1/1 u-1/2@l-wide">
              <div className="u-text-align-right@l-wide">
                <span>
                  Designed and Developed
                  <a href="#" className="u-white">
                    by&nbsp;SHA&nbsp;Heraklion
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDefault
