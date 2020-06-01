import React from "react"
import { Route, Switch } from "react-router-dom"
import Menu from "../components/Menu"
import Visits from "./Visits"

Pages.propTypes = {}

function Pages(props) {
  return (
    <div>
      <Menu loggedStatous={props.loggedStatous} />

      <Switch>
        <Route path="/visits" component={Visits} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default Pages

function Home() {
  return <h2>Home</h2>
}
