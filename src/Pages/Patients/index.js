import React from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router-dom"

import Edit from "./Edit"


Patients.propTypes = {
  match: PropTypes.object
}

function Patients({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/create-new`} component={Edit} />
      <Route path={`${match.url}/edit/:id`} component={Edit} />
    </Switch>
  )
}

export default Patients
