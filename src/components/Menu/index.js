import React from "react"
import { Link } from "react-router-dom"
import { useI18n } from "providers/I18n"

Menu.propTypes = {}

function Menu() {
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
        <li>
          <Link to="/visits">All Visits</Link>
        </li>
        <li>
          <Link to="/visits/details/details-id">View a single Visit</Link>
        </li>
        <li>
          <Link to="/visits/create-new">New visit</Link>
        </li>
        <li>
          <Link to="/visits/edit/edit-id">Edit a visit</Link>
        </li>
        <li>
          <Link to="/patients">Patients</Link>
        </li>
        <li>
          <Link to="/patients/details/details-id">Patient Details</Link>
        </li>
        <li>
          <Link to="/patients/create-new">Patient Create New</Link>
        </li>
        <li>
          <Link to="/patients/edit/edit-id">Patient Edit</Link>
        </li>
        <li>
          <Link to="/professionals">Professionals</Link>
        </li>
        <li>
          <Link to="/professionals/details/test-id">Professional Details</Link>
        </li>
        <li>
          <Link to="/professionals/create-new">Professional Create New</Link>
        </li>
        <li>
          <Link to="/professionals/edit/test-id">Professional Edit</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
