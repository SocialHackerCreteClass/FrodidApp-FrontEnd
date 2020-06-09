import React from "react"
import { Route } from "react-router-dom"
import AccessDenied from 'components/AccessDenied'

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />
        } else {
          return <AccessDenied/>
        }
      }}
    />
  )
}

export default ProtectedRoute
