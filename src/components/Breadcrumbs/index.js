import React from "react"
import Breadcrumbs from "react-router-dynamic-breadcrumbs"

import { breadcrumbsCls } from "./styles"

const routesList = {
  "/": "Home",
  "/login": "Login",
  "/register": "Register",
  "/visits": "Visits",
  "/visits/details/visit:id": "View a single Visit",
  "/visits/create-new": "New Visit",
  "/visits/edit/visit:id": "Edit a Visit",
  "/visits": "All Visits",
  "/patients": "Patients",
  "/patients/details/patient:id": "Patient Details",
  "/patients/create-new": "Patient Create New",
  "/patients/edit/patient:id": "Patient Edit"
}

function BreadcrumbsComponent() {
  return (
    <div style={{ display: "inline" }}>
      <div className={breadcrumbsCls}>
        <Breadcrumbs mappedRoutes={routesList} />
      </div>
    </div>
  )
}

export default BreadcrumbsComponent
