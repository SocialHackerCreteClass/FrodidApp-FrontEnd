import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Pages from "./Pages"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import I18nProvider from "./providers/I18n"

function PatientsCreateNew() {
  return (
    <div>

      <h1>PatientsCreateNew</h1>
    </div>
  )
}

export default PatientsCreateNew