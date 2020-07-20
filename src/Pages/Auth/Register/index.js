import React from "react"
import { Link } from "react-router-dom"

Register.propTypes = {}

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  )
}

export default Register
