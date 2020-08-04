import React from "react"
import { Route, Switch } from "react-router-dom"
import PropTypes from "prop-types"
import Visits from "./Visits"
import Professionals from "./Professionals"
import ProtectedRoute from "components/ProtectedRoute"
import Patients from "./Patients"
import TestPage from "./TestPage"
import Breadcrumbs from "components/Breadcrumbs"
import LayoutDefault from "Layouts/Default"

Pages.propTypes = {
  loggedStatus: PropTypes.bool
}

function Pages({ loggedStatus }) {
  return (
    <LayoutDefault>
      <Breadcrumbs />
      <Switch>
        <ProtectedRoute user={loggedStatus} path="/visits" component={Visits} />
        <ProtectedRoute
          user={loggedStatus}
          path="/patients"
          component={Patients}
        />
        <Route path="/professionals" component={Professionals} />
        <Route path="/test" component={TestPage} />
        <Route path="/" component={Home} />
      </Switch>
    </LayoutDefault>
  )
}

export default Pages

function Home() {
  return <h2>Home</h2>
}
