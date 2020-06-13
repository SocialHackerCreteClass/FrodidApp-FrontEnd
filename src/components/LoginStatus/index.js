import React from "react"
import PropTypes from "prop-types"
import { useI18n } from "providers/I18n"
import Input from "./../Input"

LoginStatus.propTypes = {
  loggedStatus: PropTypes.bool
}

function LoginStatus(props) {
  const { updateLocale } = useI18n()

  return (
    <div>
      {props.loggedStatus ? (
        <h1 style={{ backgroundColor: "green" }}>User is Logged in</h1>
      ) : (
        <h1 style={{ backgroundColor: "red" }}>User is logged out</h1>
      )}
      <button onClick={() => updateLocale("en")}>English</button>
      <button onClick={() => updateLocale("el")}>Ελληνικά</button>
      {props.loggedStatus}
    </div>
  )
}

export default LoginStatus
