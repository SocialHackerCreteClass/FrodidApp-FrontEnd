import React from "react"
import { Route, Switch } from "react-router-dom"
import Menu from "../components/Menu"
import Visits from "./Visits"
import ProtectedRoute from "./../components/ProtectedRoute"

Pages.propTypes = {}

function Pages() {
  const user = localStorage.getItem("user is logged") === "true"
  

  return (
    <div>
      <Menu />

      <Switch>

        <ProtectedRoute user={user} path="/visits" component={Visits} />
        <Route exact path="/" render={(props) => <Home user={user} />} />
      </Switch>
    </div>
  )
}

export default Pages

function Home() {
  return <h2>Home</h2>
}
