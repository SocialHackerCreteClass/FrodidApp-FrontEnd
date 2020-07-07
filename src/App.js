import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pages from "./Pages"
import Login from "./Pages/Auth/Login"
import Pin from "./Pages/Auth/Pin"
import Register from "./Pages/Auth/Register"
import I18nProvider from "./providers/I18n"
import { AuthProvider } from "./providers/Auth"
import "./styles/globalStyles"
import { ReactQueryDevtools } from "react-query-devtools"
import { css } from "emotion"
import LayoutAuth from "./Layouts/Auth"

function App() {
  const [loggedStatus, setLoggedStatus] = useState(
    localStorage.getItem("user is logged") === "true"
  )

  useEffect(() => {
    localStorage.setItem("user is logged", loggedStatus)
  }, [loggedStatus])

  return (
    <Router>
      <ReactQueryDevtools />
      <AuthProvider>
      <I18nProvider>
        <div className={wrapper}>
          <Switch>
            <Route path="/login">
              <LayoutAuth>
                <Login
                  loggedStatus={loggedStatus}
                  setLoggedStatus={setLoggedStatus}
                />
              </LayoutAuth>
            </Route>
            <Route path="/pin">
              <LayoutAuth>
                <Pin />
              </LayoutAuth>
            </Route>
            <Route path="/register">
              <LayoutAuth>
                <Register />
              </LayoutAuth>
            </Route>
            <Route path="/">
              <Pages loggedStatus={loggedStatus} />
            </Route>
          </Switch>
        </div>
      </I18nProvider>
      </AuthProvider>
    </Router>
  )
}

const wrapper = css`
  padding-left: 0;
  padding-right: 0;
  margin-right: auto;
  margin-left: auto;
  max-width: 1860px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`

export default App
