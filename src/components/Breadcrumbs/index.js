import React from "react"
import Breadcrumbs from "react-router-dynamic-breadcrumbs"

import { breadcrumbsCls } from "./styles"

const routesList = {
  "/": "Home",
  "/login": "Login",
  "/register": "Register",
  "/visits": "Visits",
  "/visits/details/:id": "View a single Visit",
  "/visits/create-new": "New Visit",
  "/visits/edit/:id": "Edit a Visit",
  "/visits": "All Visits",
  "/patients": "Patients",
  "/patients/details/:id": "Patient Details",
  "/patients/create-new": "Patient Create New",
  "/patients/edit/:id": "Patient Edit"
}

function BreadcrumbsComponent() {
  return (
    <div className={breadcrumbsCls}>
      <Breadcrumbs mappedRoutes={routesList} />
    </div>
  )
}

export default BreadcrumbsComponent
