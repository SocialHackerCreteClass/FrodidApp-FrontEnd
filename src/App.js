import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pages from "./Pages"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import I18nProvider from "./providers/I18n"

function App() {
  return (
    <Router>
      <I18nProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Pages />
          </Route>
        </Switch>
      </I18nProvider>
    </Router>
  )
}

export default App

//this is a test comment for a test commit
