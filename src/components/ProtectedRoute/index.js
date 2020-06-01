import React from "react"
import { Route } from "react-router-dom"

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />
        } else {
          return <h1>You must log in to view visits</h1>
        }
      }}
    />
  )
}

export default ProtectedRoute
