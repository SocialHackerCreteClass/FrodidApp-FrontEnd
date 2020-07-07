import React, { useState } from "react"

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [user, setUser] = useState({})

  const login = () => {
    setUser({
      username: "Nikos",
      password: 1234
    })
  } // make a login request

  const register = () => {} // register the user

  const logout = () => {
    setUser(undefined)
  } // clear the token in localStorage and the user data

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      {...props}
    />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
