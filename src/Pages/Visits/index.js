import React from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router-dom"
import AllVisits from "./AllVisits"
import Edit from "./Edit"
import Visit from "./Visit"

Visits.propTypes = {
  match: PropTypes.object
}

function Visits({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/create-new`} component={Edit} />
      <Route path={`${match.url}/edit/:id`} component={Edit} />
      <Route path={`${match.url}/details/:id`} component={Visit} />
      <Route path={`${match.url}/`} component={AllVisits} />
    </Switch>
  )
}

export default Visits
