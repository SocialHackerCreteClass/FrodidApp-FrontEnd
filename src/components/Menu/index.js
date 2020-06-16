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
          <Link to="/visits/details/test-id">View a single Visit</Link>
        </li>
        <li>
          <Link to="/visits/create-new">New visit</Link>
        </li>
        <li>
          <Link to="/visits/edit/test-id">Edit a visit</Link>
        </li>
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
        <li>
          <Link to="/patients">Patients</Link>
        </li>
        <li>
          <Link to="/patients/details/test-id">Patient Details</Link>
        </li>
        <li>
          <Link to="/patients/create-new">Patient Create New</Link>
        </li>
        <li>
          <Link to="/patients/edit/test-id">Patient Edit</Link>
        </li>
        <li>
          <Link to="/professionals">
            Professionals - Will display a table of all professionals
          </Link>
        </li>
        <li>
          <Link to="/professionals/details/test-id">
            Professional Details - Will display the details of a professional.
          </Link>
        </li>
        <li>
          <Link to="/professionals/create-new">
            Professional Create New - will contain a form for the creation of a
            professional. For now display just a message.
          </Link>
        </li>
        <li>
          <Link to="/professionals/edit/test-id">
            Professional Edit - will contain a form for the editing of a
            professional. For now display just a message. This will be the same
            page as the create-new page
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
