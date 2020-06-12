import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pages from "./Pages"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import I18nProvider from "./providers/I18n"
import LoginStatus from "./components/LoginStatus"
import "./styles/globalStyles"

function App() {
  const [loggedStatus, setLoggedStatus] = useState(
    localStorage.getItem("user is logged") === "true"
  )

  useEffect(() => {
    localStorage.setItem("user is logged", loggedStatus)
  }, [loggedStatus])

  return (
    <Router>
      <I18nProvider>
        <LoginStatus
          loggedStatus={loggedStatus}
          setLoggedStatus={setLoggedStatus}
        />
        <Switch>
          <Route path="/login">
            <Login
              loggedStatus={loggedStatus}
              setLoggedStatus={setLoggedStatus}
            />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Pages loggedStatus={loggedStatus} />
          </Route>
        </Switch>
      </I18nProvider>
    </Router>
  )
}

export default App
