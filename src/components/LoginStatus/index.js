import React from "react"
import PropTypes from "prop-types"

LoginStatus.propTypes = {
  loggedStatus: PropTypes.bool
}

function LoginStatus(props) {
  return (
    <div>
      {props.loggedStatus ? (
        <h1 style={{ backgroundColor: "green" }}>User is Logged in</h1>
      ) : (
        <h1 style={{ backgroundColor: "red" }}>User is logged out</h1>
      )}
      {props.loggedStatus}
    </div>
  )
}

export default LoginStatus
