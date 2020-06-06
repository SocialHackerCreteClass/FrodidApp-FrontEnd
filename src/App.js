import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pages from "./Pages"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import I18nProvider from "./providers/I18n"

function App() {
  const loggedStatus = localStorage.getItem("user is logged")
<<<<<<< HEAD
  const [userIsLogged, setUserIsLogged] = useState(loggedStatus)
=======
  const [userIsLogged, setUserIsLogged] = useState(loggedStatous)
>>>>>>> 256662133b09d30bd0b2e235e4c51739f6aa4ba5

  return (
    <Router>
      <I18nProvider>
        {loggedStatus === "true" ? (
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
