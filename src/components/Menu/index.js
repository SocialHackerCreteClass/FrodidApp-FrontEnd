import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useI18n } from "providers/I18n"

Menu.propTypes = {}

const userIsLogged = localStorage.getItem("user is logged")

function Menu(props) {
  const { t } = useI18n()

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">{t("int.login")}</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>

        {props.loggedStatous === "true" && (
          <div>
            <li>
              <Link to="/visits">All Visits</Link>
            </li>
            <li>
              <Link to="/visits/details/test-id">View a single Visit</Link>
            </li>
            <li>
              <Link to="/visits/create-new">New visit</Link>
            </li>
            <li>
              <Link to="/visits/edit/test-id">Edit a visit</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  )
}

export default Menu
