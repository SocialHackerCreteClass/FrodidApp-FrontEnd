import React from "react"
import LogoIcon from "components/Icons/Logo"
import Avatar from "components/Avatar"
import PatientsIcon from "components/Icons/Patients"
import ProfessionalsIcon from "components/Icons/Professionals"
import VisitationsIcon from "components/Icons/Visitations"
import AnalyticsIcon from "components/Icons/Analytics"
import ListBare from "components/ListBare"
import { wrapper } from "./styles"
import { cx } from "emotion"

function AppHeaderMobile() {
  return (
    <div className={cx(wrapper, "u-hide-desktop")}>
      <div className="u-padding-horizontal-tiny u-padding-vertical-small u-text-align-center">
        <div className="u-margin-bottom">
          <a href="/" title="Frontidapp">
            <LogoIcon type="mobile" />
          </a>
        </div>
        <div className="u-margin-bottom">
          <Avatar user={{ image: null, firstName: "John", lastName: "doe" }} />
        </div>
        <nav>
          <h2 className="u-hidden-visually">Navigation</h2>
          <h3 className="u-hidden-visually">Pages</h3>
          <ListBare className="u-margin-bottom">
            <li className="u-margin-bottom-small">
              <a href="patients.html">
                <PatientsIcon />
              </a>
            </li>
            <li className="u-margin-bottom-small">
              <a href="/professionals">
                <ProfessionalsIcon />
              </a>
            </li>
            <li className="u-margin-bottom-small">
              <a href="/visitations">
                <VisitationsIcon />
              </a>
            </li>
            <li className="u-margin-bottom-small">
              <a href="/analytics">
                <AnalyticsIcon />
              </a>
            </li>
          </ListBare>
          <h3 className="u-hidden-visually">Actions</h3>
          <ListBare className="u-margin-bottom">
            <li className="u-margin-bottom-small">
              <a href="/patients/create-new">
                <PatientsIcon type={"secondary"} />
              </a>
            </li>
            <li className="u-margin-bottom-small">
              <a href="/professionals/create-new">
                <ProfessionalsIcon type={"secondary"} />
              </a>
            </li>
            <li className="u-margin-bottom-small">
              <a href="/visitations/create-new">
                <VisitationsIcon type={"secondary"} />
              </a>
            </li>
          </ListBare>
        </nav>
      </div>
    </div>
  )
}

export default AppHeaderMobile
