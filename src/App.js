import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pages from "./Pages"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import I18nProvider from "./providers/I18n"

function App() {
  const loggedStatus = localStorage.getItem("user is logged")
  const [userIsLogged, setUserIsLogged] = useState(loggedStatous)

  return (
    <Router>
      <I18nProvider>
        {loggedStatous === "true" ? (
          <h1 style={{ backgroundColor: "green" }}>User is Logged in</h1>
        ) : (
          <h1 style={{ backgroundColor: "red" }}>User is logged out</h1>
        )}

        <Switch>
          <Route path="/login">
            <Login
              userIsLogged={userIsLogged}
              setUserIsLogged={setUserIsLogged}
            />
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
