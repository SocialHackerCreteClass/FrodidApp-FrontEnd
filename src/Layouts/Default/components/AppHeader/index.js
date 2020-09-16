import React from "react"
import LogoIcon from "components/Icons/Logo"
import ListBare from "components/ListBare"
import PatientsIcon from "components/Icons/Patients"
import ProfessionalsIcon from "components/Icons/Professionals"
import VisitationsIcon from "components/Icons/Visitations"
import AnalyticsIcon from "components/Icons/Analytics"
import { TextIcon } from "components/Flag"
import {
  activeLink,
  localeCls,
  navIcon,
  navLinkPrimary,
  navLinkSecondary,
  wrapper
} from "./styles"
import { Link, NavLink } from "react-router-dom"
import { cx } from "emotion"
import { useI18n } from "providers/I18n"
import SelectLocale from "../SelectLocale"

function AppHeader() {
  const { t } = useI18n()

  return (
    <div className={cx(wrapper, "u-hide u-show-desktop-flex")}>
      <div className="u-padding-small u-margin-bottom-large">
        <Link to="/" title="Frontidapp">
          <LogoIcon />
        </Link>
      </div>
      <nav>
        <h2 className="u-hidden-visually">{`${t("int.navigation")}`}</h2>
        <div className="u-padding-left-small">
          <h3 className="c-label c-label--small">{`${t("int.pagesCap")}`}</h3>
        </div>
        <div className="u-margin-bottom-large">
          <ListBare>
            <li>
              <NavLink
                to="/patients"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<PatientsIcon className={navIcon} />}>
                    {`${t("int.patientsCap")}`}
                  </TextIcon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/professionals"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<ProfessionalsIcon className={navIcon} />}>
                    {`${t("int.professionalsCap")}`}
                  </TextIcon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/visits"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<VisitationsIcon className={navIcon} />}>
                    {`${t("int.visitsCap")}`}
                  </TextIcon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<AnalyticsIcon className={navIcon} />}>
                    {`${t("int.analyticsCap")}`}
                  </TextIcon>
                </div>
              </NavLink>
            </li>
          </ListBare>
        </div>
        <div className="u-padding-left-small">
          <h3 className="c-label c-label--small">{`${t("int.actionsCap")}`}</h3>
        </div>
        <ListBare>
          <li>
            <NavLink
              to="/patients/create-new"
              activeClassName={activeLink}
              className={navLinkSecondary}>
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon
                  icon={
                    <PatientsIcon type={"secondary"} className={navIcon} />
                  }>
                  {`${t("int.patientsCap")}`}
                </TextIcon>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/professionals/create-new"
              activeClassName={activeLink}
              className={navLinkSecondary}>
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon
                  icon={
                    <ProfessionalsIcon type={"secondary"} className={navIcon} />
                  }>
                  {`${t("int.professionalsCap")}`}
                </TextIcon>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visits/create-new"
              activeClassName={activeLink}
              className={navLinkSecondary}>
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon
                  icon={
                    <VisitationsIcon type={"secondary"} className={navIcon} />
                  }>
                  {`${t("int.visitsCap")}`}
                </TextIcon>
              </div>
            </NavLink>
          </li>
        </ListBare>
      </nav>
      <SelectLocale className={localeCls} />
    </div>
  )
}

export default AppHeader
