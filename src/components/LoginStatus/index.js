import React, { useState } from "react"

function LoginStatus(props) {
  console.log(props)
  return (
    <div>
      {props.loggedStatus === true ? (
        <h1 style={{ backgroundColor: "green" }}>User is Logged in</h1>
      ) : (
        <h1 style={{ backgroundColor: "red" }}>User is logged out</h1>
      )}
      {props.loggedStatus}
    </div>
  )
}

export default LoginStatus
