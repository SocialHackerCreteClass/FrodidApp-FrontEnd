import React, { useState } from "react"
import App from "./App"
import UnauthenticatedApp from "./UnauthenticatedApp"

function AppAuth() {
  const [user, setUser] = useState("")
  return user ? <App /> : <UnauthenticatedApp setUser={setUser} />
}

export default AppAuth
