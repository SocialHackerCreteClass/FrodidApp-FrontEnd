import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import { form, input } from "./styles"
import { cx } from "emotion"
import Input from "../../../components/Input"

Login.propTypes = {
  setLoggedStatus: PropTypes.func
}

function Login(props) {
  const history = useHistory()

  const { setLoggedStatus } = props

  function login() {
    setLoggedStatus(true)
    history.push("/")
  }

  function logout() {
    setLoggedStatus(false)
    history.push("/login")
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h1>Login page</h1>
      <form>
        <label>
          Email
          <Input name="email" type="email" onChange={onChange} />
        </label>
        <label>
          Password
          <Input name="password" type="password" onChange={onChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      <hr />

      <br />
    </div>
  )
}

export default Login
