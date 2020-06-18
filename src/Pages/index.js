import React from "react"
import { Route, Switch } from "react-router-dom"
import PropTypes from "prop-types"
import Menu from "../components/Menu"
import Visits from "./Visits"
import ProtectedRoute from "./../components/ProtectedRoute"
import Patients from "./Patients"
import TestPage from "./TestPage"

Pages.propTypes = {
  loggedStatus: PropTypes.bool
}

function Pages({ loggedStatus }) {
  return (
    <div>
      <Menu />
      <Switch>
        <ProtectedRoute user={loggedStatus} path="/visits" component={Visits} />
        <ProtectedRoute
          user={loggedStatus}
          path="/patients"
          component={Patients}
        />
        <Route path="/test" exact component={TestPage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  )
}

export default Pages

function Home() {
  return <h2>Home</h2>
}
