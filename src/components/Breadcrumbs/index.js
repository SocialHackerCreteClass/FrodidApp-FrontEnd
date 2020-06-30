/* eslint-disable react/prop-types */
import React from "react"
import Breadcrumbs from "react-router-dynamic-breadcrumbs"
import { itemCls, wrapperCls } from "./styles"
import { cx } from "emotion"

const routesList = {
  "/login": "Login",
  "/register": "Register",
  "/visits/details": null,
  "/visits/details/:id": "View a single Visit",
  "/visits/create-new": "New Visit",
  "/visits/edit": null,
  "/visits/edit/:id": "Edit a Visit",
  "/visits": "All Visits",
  "/patients": "Patients",
  "/patients/details": null,
  "/patients/details/:id": "Patient Details",
  "/patients/create-new": "Create New",
  "/patients/edit": null,
  "/patients/edit/:id": "Patient Edit"
}

function BreadcrumbsComponent() {
  return (
    <Breadcrumbs
      mappedRoutes={routesList}
      WrapperComponent={(props) => (
        <ol className={wrapperCls}>{props.children}</ol>
      )}
      LinkComponent={(props) => <li className={itemCls}>{props.children}</li>}
      ActiveLinkComponent={(props) => (
        <li className={cx(itemCls, "active")}>{props.children}</li>
      )}
    />
  )
}

export default BreadcrumbsComponent
