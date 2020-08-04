import React from "react"

function AppHeader() {
  return (
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
  )
}

export default AppHeader
