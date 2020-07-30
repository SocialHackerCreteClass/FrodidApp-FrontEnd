import React, { useState, useMemo } from "react"
import { useQuery } from "react-query"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"
import { getUserData } from "../../../api/auth.js"
import { useHistory } from "react-router"
import dayjs from "dayjs"

Register.propTypes = {}

function Register() {
  const { t } = useI18n()
  const history = useHistory()

  const pin = useMemo(() => {
    const search = history.location.search
    const searchParams = new URLSearchParams(search)
    return searchParams.get("pin")
  }, [history.location.search])

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    profession: "",
    passwordConfirmed: ""
  })

  useQuery(["userData", pin], getUserData, {
    onSuccess: (data) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...data
      }))
    }
  })

  function handleSubmit() {
    if (formData.password !== formData.passwordConfirmed) {
      console.log("Make sure you typed the password correctly.")
    } else if (
      formData.password === "" ||
      formData.birthDate === "" ||
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
            onChange={(value) => setFormData({ ...formData, birthDate: value })}
            type="date"
            disabled
            value={formData.birthDate}
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
