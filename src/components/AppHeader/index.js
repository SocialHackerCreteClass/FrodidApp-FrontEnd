import React from "react"
import LogoIcon from "components/Icons/Logo"
import ListBare from "components/ListBare"
import PatientsIcon from "components/Icons/Patients"
import ProfessionalsIcon from "components/Icons/Professionals"
import VisitationsIcon from "components/Icons/Visitations"
import AnalyticsIcon from "components/Icons/Analytics"
import { TextIcon } from "components/Flag"

function AppHeader() {
  return (
    <div className="c-app-header c__app-header--desktop u-hide u-show-desktop">
      <div className="u-padding-small u-margin-bottom-large">
        <a href="/" title="Frontidapp">
          <LogoIcon />
        </a>
      </div>
      <nav>
        <h2 className="u-hidden-visually">Navigation</h2>
        <div className="u-padding-left-small">
          <h3 className="c-label c-label--small">Pages</h3>
        </div>
        <div className="u-margin-bottom-large">
          <ListBare>
            <li>
              <a
                href="patients.html"
                className="c-main-nav__link c-main-nav__link--primary c-main-nav__link--primary-active">
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<PatientsIcon />}>
                    <span className="c-main-nav__text">patients</span>
                  </TextIcon>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/professionals"
                className="c-main-nav__link c-main-nav__link--primary">
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<ProfessionalsIcon />}>
                    <span className="c-main-nav__text">professionals</span>
                  </TextIcon>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/visitations"
                className="c-main-nav__link c-main-nav__link--primary">
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<VisitationsIcon />}>
                    <span className="c-main-nav__text">visitations</span>
                  </TextIcon>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/analytics"
                className="c-main-nav__link c-main-nav__link--primary">
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<AnalyticsIcon />}>
                    <span className="c-main-nav__text">Analytics</span>
                  </TextIcon>
                </div>
              </a>
            </li>
          </ListBare>
        </div>
        <div className="u-padding-left-small">
          <h3 className="c-label c-label--small">Actions</h3>
        </div>
        <ListBare>
          <li>
            <a
              href="/create-new/patients"
              className="c-main-nav__link c-main-nav__link--secondary">
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon icon={<PatientsIcon type={"secondary"} />}>
                  <span className="c-main-nav__text">Patients</span>
                </TextIcon>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/create-new/professionals"
              className="c-main-nav__link c-main-nav__link--secondary">
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon icon={<ProfessionalsIcon type={"secondary"} />}>
                  <span className="c-main-nav__text">Professionals</span>
                </TextIcon>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/create-new/visitations"
              className="c-main-nav__link c-main-nav__link--secondary">
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon icon={<VisitationsIcon type={"secondary"} />}>
                  <span className="c-main-nav__text">visitations</span>
                </TextIcon>
              </div>
            </a>
          </li>
        </ListBare>
      </nav>
    </div>
  )
}

export default AppHeader
