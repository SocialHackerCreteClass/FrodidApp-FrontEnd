import React from "react"

function AppHeaderMobile(props) {
  return (
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
                  <use className="c-icon--primary" href="#icon-patients"></use>
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
                  <use className="c-icon--primary" href="#icon-analytics"></use>
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
  )
}

export default AppHeaderMobile
