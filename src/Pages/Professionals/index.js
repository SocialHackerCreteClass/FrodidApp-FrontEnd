import React from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router-dom"
import AllProfessionals from "./AllProfessionals"
import Edit from "./Edit"
import Professional from "./Professional/"

Professionals.propTypes = {
  match: PropTypes.object
}

function Professionals({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/create-new`} component={Edit} />
      <Route path={`${match.url}/edit/:id`} component={Edit} />
      <Route path={`${match.url}/details/:id`} component={Professional} />
      <Route path={`${match.url}/`} component={AllProfessionals} />
    </Switch>
  )
}

export default Professionals
