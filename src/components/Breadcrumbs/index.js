import React from "react"
import Breadcrumbs from "react-router-dynamic-breadcrumbs"
import { Link, BrowserRouter as Router } from "react-router-dom"
import PropTypes from "prop-types"

const routesList = {
  "/": "Home",
  "/login": "Login",
  "/register": "Register",
  "/visits": "Visits",
  "/visits/details/:id": "View a single Visit",
  "/visits/create-new": "New Visit",
  "/visits/edit/test-id": "Edit a Visit",
  "/visits": "All Visits",
  "/patients": "Patients",
  "/patients/details/test-id": "Patient Details",
  "/patients/create-new": "Patient Create New",
  "/patients/edit/test-id": "Patient Edit"
}

function BreadcrumbsComponent() {
  return (
    <Router>
      <Breadcrumbs mappedRoutes={routesList} />
    </Router>
  )
}

export default BreadcrumbsComponent
