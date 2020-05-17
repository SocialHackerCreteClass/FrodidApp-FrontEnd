import React from "react"
import { Link } from "react-router-dom"

Menu.propTypes = {}

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
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
      </ul>
    </nav>
  )
}

export default Menu
