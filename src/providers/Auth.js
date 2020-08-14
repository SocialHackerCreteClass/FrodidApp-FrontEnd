import React, { useCallback, useEffect, useState } from "react"
import { loadFromStorage, saveToStorage } from "utils/storage"
import { useHistory } from "react-router"
import PropTypes from "prop-types"

const createAppFetch = (access_token) => {
  window.appFetch = async (url, init) => {
    const options = init ?? {}
    const headers = new Headers(options.headers)
    if (!headers.has("content-type")) {
      headers.set("content-type", "application/json")
    }

    if (access_token) headers.set("Authorization", `${access_token}`)

    const response = await fetch(url, {
      ...options,
      credentials: "same-origin",
      headers
    })

    if (!response.ok) throw response

    return response
  }
}

const STORAGE_KEY = "auth"
const AuthContext = React.createContext()

AuthProvider.propTypes = {
  children: PropTypes.node
}

function AuthProvider(props) {
  const history = useHistory()
  const [authData, setAuthData] = useState(loadFromStorage(STORAGE_KEY))
  const [isReady, setIsReady] = useState(false)

  const login = useCallback(async (loginData) => {
    const response = await window.appFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData)
    })
    const authData = await response.json()
    setAuthData(authData)
    saveToStorage(STORAGE_KEY, authData)
  }, [])

  const register = () => {} // register the user

  const logout = useCallback(() => {
    setAuthData(undefined)
    saveToStorage(STORAGE_KEY, undefined)
    history.push("/login")
  }, [history])

  const { user, token } = authData || {}

  useEffect(() => {
    createAppFetch(token)
    setIsReady(true)
  }, [token])

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {isReady && props.children}
    </AuthContext.Provider>
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
