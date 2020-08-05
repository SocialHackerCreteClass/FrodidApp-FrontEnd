import React from "react"
import { Redirect, Route } from "react-router-dom"
import PropTypes from "prop-types"
import AccessDenied from "components/AccessDenied"
import { useAuth } from "providers/Auth"

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  redirect: PropTypes.bool
}

function ProtectedRoute({ component: Component, redirect = true, ...rest }) {
  const { user } = useAuth()
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
