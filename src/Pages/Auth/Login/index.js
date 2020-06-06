import React, { useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom"

Login.propTypes = {}

function Login(props) {
  //const loggedStatus = props.userIsLogged

  let history = useHistory()
  console.log(history)

  const params = useParams()

  const { userIsLogged } = props

  function login(userIsLogged) {
    props.setUserIsLogged(true)
    //window.location.reload(false)
    history.goBack()
  }

  function logout(userIsLogged) {
    props.setUserIsLogged(false)
    //window.location.reload(false)
    history.goBack()
  }

  useEffect(() => {
    localStorage.setItem("user is logged", userIsLogged)
  }, [userIsLogged])

  return (
    <div>
      <h1>This will be the Login page</h1>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>

      <br />
    </div>
  )
}

export default Login
