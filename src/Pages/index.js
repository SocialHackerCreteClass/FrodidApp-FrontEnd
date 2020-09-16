import React from "react"
import { Route, Switch } from "react-router-dom"
import Visits from "./Visits"
import Professionals from "./Professionals"
import ProtectedRoute from "components/ProtectedRoute"
import Patients from "./Patients"
import TestPage from "./TestPage"
import Breadcrumbs from "components/Breadcrumbs"
import LayoutDefault from "Layouts/Default"

function Pages() {
  return (
    <LayoutDefault>
      <Breadcrumbs />
      <Switch>
        <ProtectedRoute path="/visits" component={Visits} />
        <ProtectedRoute path="/patients" component={Patients} />
        <ProtectedRoute path="/professionals" component={Professionals} />
        <Route path="/test" component={TestPage} />
        <ProtectedRoute path="/" component={Patients} />
      </Switch>
    </LayoutDefault>
  )
}

export default Pages
