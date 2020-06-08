import React from "react"
import { Route, Switch } from "react-router-dom"
import Menu from "../components/Menu"
import Visits from "./Visits"
import Professionals from "./Professionals"

Pages.propTypes = {}

function Pages() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/visits" component={Visits} />
        <Route path="/" component={Home} />
        <Route path="/professionals" component={Professionals} />
      </Switch>
    </div>
  )
}

export default Pages

function Home() {
  return <h2>Home</h2>
}
