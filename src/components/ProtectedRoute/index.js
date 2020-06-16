import React from "react"
import { Redirect, Route } from "react-router-dom"
import PropTypes from "prop-types"
import AccessDenied from "components/AccessDenied"

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.bool,
  redirect: PropTypes.bool
}

function ProtectedRoute({
  component: Component,
  user,
  redirect = true,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />
        } else if (redirect) {
          return <Redirect to="/login" />
        } else {
          return <AccessDenied />
        }
      }}
    />
  )
}

export default ProtectedRoute
