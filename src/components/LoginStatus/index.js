import React from "react"
import PropTypes from "prop-types"
import { useI18n } from "providers/I18n"
import BreadcrumbsComponent from "../Breadcrumbs"

LoginStatus.propTypes = {
  loggedStatus: PropTypes.bool
}

function LoginStatus(props) {
  const { updateLocale } = useI18n()

  return (
    <div>
      {props.loggedStatus ? (
        <div style={{ backgroundColor: "green" }}>User is Logged in</div>
      ) : (
        <div style={{ backgroundColor: "red" }}>User is logged out</div>
      )}
      <button onClick={() => updateLocale("en")}>English</button>
      <button onClick={() => updateLocale("el")}>Ελληνικά</button>
      {props.loggedStatus}
    </div>
  )
}

export default LoginStatus
