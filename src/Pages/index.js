import React from "react"
import { Route, Switch } from "react-router-dom"
import Menu from "../components/Menu"
import Visits from "./Visits"
import Patients from "./Patients"

Pages.propTypes = {}

function Pages() {
  return (
    <div>
      <Menu />
      <Switch>
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
