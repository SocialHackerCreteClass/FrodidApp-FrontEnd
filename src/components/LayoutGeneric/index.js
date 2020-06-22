import React from "react"

function LayoutGeneric() {
  return (
    <div className="o-wrapper u-padding-horizontal-none">
      <div className="g-forms">
        <div className="g-narrow">
          <div className="u-padding-vertical u-margin-bottom-large u-margin-bottom-huge@tablet">
            {/* Content */}
          </div>
        </div>
        <div className="g-wide">
          <div className="c-form-footer">
            <div className="o-grid">
              <div className="o-grid__cell u-1/1 u-1/2@desktop">
                <div className="u-margin-bottom u-margin-bottom-none@desktop">
                  <ul className="o-list-inline u-margin-bottom-none">
                    <li className="o-list-inline__item u-margin-right u-margin-bottom-small u-margin-bottom-none@desktop">
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
                    <li className="o-list-inline__item u-margin-bottom-small u-margin-bottom-none@desktop">
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
              <div className="o-grid__cell u-1/1 u-1/2@desktop">
                <div className="u-text-align-right@desktop">
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
    </div>
  )
}

export default LayoutGeneric
