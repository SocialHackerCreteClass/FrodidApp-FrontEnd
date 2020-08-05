import React, { useEffect, useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"
import { useAuth } from "providers/Auth"
import { useHistory } from "react-router"

function Login() {
  const { t } = useI18n()
  const history = useHistory()
  const { login, user } = useAuth()
  const [formData, setFormData] = useState({ email: "", password: "" })

  async function handleSubmit() {
    try {
      await login(formData)
    } catch (e) {
      console.error(e.message)
    }
  }

  useEffect(() => {
    if (user) {
      history.push("/")
    }
  }, [user, history])

  return (
    <div>
      <h3>{`${t("int.login")}`}</h3>
      <form>
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

        <Button onClick={handleSubmit}>{`${t("int.submit")}`}</Button>
      </form>
    </div>
  )
}

export default Login
