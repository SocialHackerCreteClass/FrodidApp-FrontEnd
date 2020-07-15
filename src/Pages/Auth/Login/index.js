import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import PropTypes, { object } from "prop-types"
import { form, input } from "./styles"
import { cx } from "emotion"
import Input from "components/Input"
import Button from "components/Button"

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

  const initialFormData = Object.freeze({
    email: "",
    password: ""
  })

  const [formData, updateFormData] = useState(initialFormData)

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    })
  }

  const handleSubmit = (event) => {
    event.persist()
    event.preventDefault()
    console.log(formData)

    // ... submit to API or something
  }

  return (
    <div>
      <h1>Login page</h1>
      <form>
        <label>
          Email
          <Input name="email" type="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password
          <Input name="password" type="password" onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      <hr />

      <br />
    </div>
  )
}

export default Login
