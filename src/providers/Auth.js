import React, { useCallback, useState } from "react"
import { sleep } from "utils"
import { loadFromStorage, saveToStorage } from "utils/storage"
import { useHistory } from "react-router"

const STORAGE_KEY = "auth"
const AuthContext = React.createContext()

function AuthProvider(props) {
  const history = useHistory()
  const [user, setUser] = useState(loadFromStorage(STORAGE_KEY))

  const login = useCallback(async (loginData) => {
    await sleep(2000)
    if (
      loginData.email === "admin@gmail.com" &&
      loginData.password === "admin"
    ) {
      const mockedUser = {
        id: 123,
        firstName: "admin",
        lastName: "adminopoulos",
        email: "admin@gmail.com",
        birthDate: 12344,
        createdDate: 12334,
        afm: 123234435,
        amka: 123123123,
        role: "admin"
      }
      saveToStorage(STORAGE_KEY, mockedUser)
      setUser(mockedUser)
    } else {
      throw new Error("invalid credentials")
    }
  }, [])

  const register = () => {} // register the user

  const logout = useCallback(() => {
    setUser(undefined)
    saveToStorage(STORAGE_KEY, undefined)
    history.push("/login")
  }, [history])

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      {...props}
    />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
