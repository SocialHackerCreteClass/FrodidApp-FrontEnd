import React, { useState, useEffect, useMemo } from "react"
import { useQuery } from "react-query"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"
import { getUserData } from "../../../api/auth.js"

Register.propTypes = {}

function Register() {
  const { t } = useI18n()
  // eslint-disable-next-line
  let userCode = useMemo(() => {
    return window.location.href
    // eslint-disable-next-line
  }, [window.location.href])

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    profession: "",
    passwordConfirmed: ""
  })

  const { status, data } = useQuery("userData", getUserData)

  useEffect(() => {
    if (status === "success") {
      setFormData({
        ...formData,
        email: data.email,
        firstName: data.name.first,
        lastName: data.name.last,
        dob: data.dob.date
      })
    }
    //the following line is disabled because eslint suggest us to add formData on dependencies array, which will lead to an infinite loop
    // eslint-disable-next-line
  }, [status, data])

  function handleSubmit() {
    if (formData.password !== formData.passwordConfirmed) {
      console.log("Make sure you typed the password correctly.")
    } else if (
      formData.password === "" ||
      formData.dob === "" ||
      formData.profession === ""
    ) {
      console.log("Please fill in all the required fields")
    } else {
      console.log(formData)
    }
  }

  return (
    <div>
      <h3>{`${t("int.register")}`}</h3>

      <form>
        <label>
          {`${t("int.firstName")}`}
          <Input
            onChange={(value) => setFormData({ ...formData, firstName: value })}
            type="text"
            disabled
            value={formData.firstName}
          />
        </label>
        <label>
          {`${t("int.lastName")}`}
          <Input
            onChange={(value) => setFormData({ ...formData, lastName: value })}
            type="text"
            disabled
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
            disabled
            value={formData.profession}
          />
        </label>
        <label>
          {`${t("int.email")}`}
          <Input
            type="email"
            onChange={(value) => setFormData({ ...formData, email: value })}
            disabled
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
