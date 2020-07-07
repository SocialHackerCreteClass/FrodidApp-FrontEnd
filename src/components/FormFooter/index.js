import React from "react"
import Mail from "components/Icons/Mail"
import Phone from "components/Icons/Phone"
import { wrapper } from "./styles"

function FormFooter(props) {
  return (
    <div className={ wrapper }>
      <div className="o-grid">
        <div className="o-grid__cell u-1/1 u-1/2@desktop">
          <div className="u-margin-bottom u-margin-bottom-none@desktop">
            <ul className="o-list-inline u-margin-bottom-none">
              <li className="o-list-inline__item u-margin-right u-margin-bottom-small u-margin-bottom-none@desktop">
                <div className="o-flag o-flag--small">
                  <div className="o-flag__img">
                    <Mail size={"small"} color={"#fff"} />
                  </div>
                  <div className="o-flag__body">
                    <a href="mailto:support@frontidapp.gr" className="u-white">
                      support@frontidapp.gr
                    </a>
                  </div>
                </div>
              </li>
              <li className="o-list-inline__item u-margin-bottom-small u-margin-bottom-none@desktop">
                <div className="o-flag o-flag--small">
                  <div className="o-flag__img">
                    <Phone size={"small"} color={"#fff"} />
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
  )
}

export default FormFooter
