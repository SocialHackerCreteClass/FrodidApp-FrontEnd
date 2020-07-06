import React from "react"

const AuthContext = React.createContext()

function AuthProvider(props) {
  const login = () => {} // make a login request
  const register = () => {} // register the user
  const logout = () => {} // clear the token in localStorage and the user data

  return <AuthContext.Provider value={{ login, logout, register }} {...props} />
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
