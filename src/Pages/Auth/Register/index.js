import React, { useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"

Register.propTypes = {}

function Register() {
  const { t } = useI18n()

  const [urlUserCode, setUrlUserCode] = useState(window.location.href)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    profession: "",
    passwordConfirmed: ""
  })

  const getUserData = async () => {
    const response = await fetch(`https://randomuser.me/api/`)
    const data = await response.json()
    return data.results[0]
  }

  const { status, data, error } = useQuery("userData", getUserData)
  console.log("status ", status)
  if (status === "success") {
    console.log(data)
  }

  function handleSubmit() {
    if (formData.password !== formData.passwordConfirmed) {
      console.log("Make sure you typed the password correctly.")
    } else {
      console.log(formData)
    }
  }

  return (
    <div>
      <h3>{`${t("int.register")}`}</h3>
      <button onClick={getUserData}>fetch random user data</button>
      <form>
        <label>
          {`${t("int.firstName")}`}
          <Input
            onChange={(value) => setFormData({ ...formData, firstName: value })}
            type="text"
            value={formData.firstName}
          />
        </label>
        <label>
          {`${t("int.lastName")}`}
          <Input
            onChange={(value) => setFormData({ ...formData, lastName: value })}
            type="text"
            value={formData.lastName}
          />
        </label>
        <label>
          {`${t("int.dateOfBirth")}`}
          <Input
            onChange={(value) => setFormData({ ...formData, dob: value })}
            type="date"
            value={formData.dob}
          />
        </label>
        <label>
          {`${t("int.profession")}`}
          <Input
            onChange={(value) =>
              setFormData({ ...formData, profession: value })
            }
            type="text"
            value={formData.profession}
          />
        </label>
        <label>
          {`${t("int.email")}`}
          <Input
            type="email"
            onChange={(value) => setFormData({ ...formData, email: value })}
            value={formData.email}
          />
        </label>
        <label>
          {`${t("int.password")}`}
          <Input
            onChange={(value) => setFormData({ ...formData, password: value })}
            type="password"
            value={formData.password}
          />
        </label>
        <label>
          {`${t("int.passwordConfirmed")}`}
          <Input
            onChange={(value) =>
              setFormData({ ...formData, passwordConfirmed: value })
            }
            type="password"
            value={formData.passwordConfirmed}
          />
        </label>

        <Button onClick={handleSubmit}>{`${t("int.submit")}`}</Button>
      </form>
    </div>
  )
}

export default Register
