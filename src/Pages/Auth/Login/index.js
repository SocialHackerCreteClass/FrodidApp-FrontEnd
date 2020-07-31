import React, { useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"
import {
  wrapper,
  header,
  email,
  password,
  buttonWrapper,
  linkWrapper
} from "./styles"

function Login(props) {
  const { t } = useI18n()

  const [formData, setFormData] = useState({ email: "", password: "" })

  function handleSubmit() {
    console.log(formData)
  }

  return (
    <div className={wrapper}>
      <h2 className={header}>{`${t("int.login")}`}</h2>
      <form>
        <div className={email}>
          <label>
            {`${t("int.email")}`}
            <Input
              type="email"
              onChange={(value) => setFormData({ ...formData, email: value })}
              value={formData.email}
              placeholder="Enter your email..."
            />
          </label>
        </div>
        <div className={password}>
          <label>
            {`${t("int.password")}`}
            <Input
              onChange={(value) =>
                setFormData({ ...formData, password: value })
              }
              type="password"
              value={formData.password}
              placeholder="Enter your password..."
            />
          </label>
          <a href="#">Forgot your password?</a>
        </div>
      </form>
      <div className={buttonWrapper}>
        <Button
          onClick={handleSubmit}
          variant="secondary"
          size="large"
          full>{`${t("int.login")}`}</Button>
      </div>

      <div className={linkWrapper}>
        <a href="/pin">
          <span>
            Don’t have an account?
            <span c>Enter pin</span>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Login
