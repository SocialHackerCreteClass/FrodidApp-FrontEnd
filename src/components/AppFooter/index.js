import React from "react"
import Grid, { GridCell } from "components/Grid"
import { wrapper } from './styles'
 
function AppFooter(props) {
  return (
    <div className={wrapper}>
      <Grid>
        <GridCell className="u-1/1 u-1/2@l-wide">
          <div className="u-margin-bottom u-margin-bottom-none@l-wide">
            <ul className="o-list-inline u-margin-bottom-none">
              <li className="o-list-inline__item u-margin-right u-margin-bottom-small u-margin-bottom-none@l-wide">
                <div className="o-flag o-flag--small">
                  <div className="o-flag__img">
                    <svg className="c-icon c-icon--small">
                      <use className="c-icon--white" href="#icon-mail"></use>
                    </svg>
                  </div>
                  <div className="o-flag__body">
                    <a href="mailto:support@frontidapp.gr" className="u-white">
                      support@frontidapp.gr
                    </a>
                  </div>
                </div>
              </li>
              <li className="o-list-inline__item u-margin-bottom-small u-margin-bottom-none@l-wide">
                <div className="o-flag o-flag--small">
                  <div className="o-flag__img">
                    <svg className="c-icon c-icon--small">
                      <use className="c-icon--white" href="#icon-phone"></use>
                    </svg>
                  </div>
                  <div className="o-flag__body">
                    <span className="u-white">0030 2810 223 555</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </GridCell>
        <GridCell className="u-1/1 u-1/2@l-wide">
          <div className="u-text-align-right@l-wide">
            <span>
              Designed and Developed
              <a href="#" className="u-white">
                by&nbsp;SHA&nbsp;Heraklion
              </a>
            </span>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}

export default AppFooter
