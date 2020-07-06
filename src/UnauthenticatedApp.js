import React from "react"

const UnauthenticatedApp = ({ setUser }) => {
  return (
    <>
      <p>Please Login</p>
      <button
        onClick={() => {
          setUser("user")
        }}>
        Login
      </button>
    </>
  )
}

export default UnauthenticatedApp
