import React from "react"
import LogoIcon from "components/Icons/Logo"
import Avatar from "components/Avatar"
import PatientsIcon from "components/Icons/Patients"
import ProfessionalsIcon from "components/Icons/Professionals"
import VisitationsIcon from "components/Icons/Visitations"
import AnalyticsIcon from "components/Icons/Analytics"
import ListBare from "components/ListBare"
import { localeCls, wrapper } from "./styles"
import { cx } from "emotion"
import { useI18n } from "providers/I18n"

import { Link, NavLink } from "react-router-dom"
import SelectLocale from "../SelectLocale"

function AppHeaderMobile() {
  const { t } = useI18n()

  return (
    <div className={cx(wrapper, "u-hide-desktop")}>
      <div className="u-padding-horizontal-tiny u-padding-vertical-small u-text-align-center">
        <div className="u-margin-bottom">
          <Link to="/" title="Frontidapp">
            <LogoIcon type="mobile" />
          </Link>
        </div>
        <div className="u-margin-bottom">
          <Avatar user={{ image: null, firstName: "John", lastName: "doe" }} />
        </div>
        <nav>
          <h2 className="u-hidden-visually">{`${t("int.navigation")}`}</h2>
          <h3 className="u-hidden-visually">{`${t("int.pagesCap")}`}</h3>
          <ListBare className="u-margin-bottom">
            <li className="u-margin-bottom-small">
              <NavLink to="/patients">
                <PatientsIcon />
              </NavLink>
            </li>
            <li className="u-margin-bottom-small">
              <NavLink to="/professionals">
                <ProfessionalsIcon />
              </NavLink>
            </li>
            <li className="u-margin-bottom-small">
              <NavLink to="/visits">
                <VisitationsIcon />
              </NavLink>
            </li>
            <li className="u-margin-bottom-small">
              <NavLink to="/analytics">
                <AnalyticsIcon />
              </NavLink>
            </li>
          </ListBare>
          <h3 className="u-hidden-visually">{`${t("int.actionsCap")}`}</h3>
          <ListBare className="u-margin-bottom">
            <li className="u-margin-bottom-small">
              <NavLink to="/patients/create-new">
                <PatientsIcon type={"secondary"} />
              </NavLink>
            </li>
            <li className="u-margin-bottom-small">
              <NavLink to="/professionals/create-new">
                <ProfessionalsIcon type={"secondary"} />
              </NavLink>
            </li>
            <li className="u-margin-bottom-small">
              <NavLink to="/visits/create-new">
                <VisitationsIcon type={"secondary"} />
              </NavLink>
            </li>
          </ListBare>
        </nav>
      </div>
      <SelectLocale className={localeCls} />
    </div>
  )
}

export default AppHeaderMobile
