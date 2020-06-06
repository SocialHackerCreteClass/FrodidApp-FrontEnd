import React from "react"
import { Link } from "react-router-dom"

function AccessDenied() {
  return (
    <div>
      <h1>Access is Denied</h1>

      <p>Please Log in to view the pages</p>
      <Link to="/login">
        <button>Log In </button>
      </Link>
    </div>
  )
}

export default AccessDenied
