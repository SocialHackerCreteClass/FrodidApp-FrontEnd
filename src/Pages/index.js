import React from "react"
import { Route, Switch, useHistory } from "react-router-dom"
import Menu from "../components/Menu"
import Visits from "./Visits"

import ProtectedRoute from "./../components/ProtectedRoute"

import Patients from "./Patients"


Pages.propTypes = {}

function Pages() {
  const user = localStorage.getItem("user is logged") === "true"

  return (
    <div>
      <Menu />

      <Switch>

        <ProtectedRoute user={user} path="/visits" component={Visits} />
        <Route exact path="/" render={(props) => <Home user={user} />} />

        <Route path="/visits" component={Visits} />
        <Route path="/patients" component={Patients} />
        <Route path="/" component={Home} />

      </Switch>
    </div>
  )
}

export default Pages

function Home() {
  return <h2>Home</h2>
}
