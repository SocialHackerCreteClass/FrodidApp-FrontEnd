import React, { useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"

function Login(props) {
  const { t } = useI18n()

  const [formData, setFormData] = useState({ email: "", password: "" })

  function handleSubmit() {
    console.log(formData)
  }

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
