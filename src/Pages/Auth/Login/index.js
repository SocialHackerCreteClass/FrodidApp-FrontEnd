import React, { useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"
import { cx } from "emotion"
import { buttonWrapper, linkWrapper, inputWrapper } from "./styles"

function Login() {
  const { t } = useI18n()

  const [formData, setFormData] = useState({ email: "", password: "" })

  function handleSubmit() {
    console.log(formData)
  }

  return (
    <div className={"o-wrapper u-padding-horizontal-none g-forms g-narrow"}>
      <h2 className={"u-margin-bottom-large u-text-align-center h6"}>{`${t(
        "int.login"
      )}`}</h2>
      <form>
        <div className={"u-margin-bottom"}>
          <label
            className={cx(
              "c-label c-label--primary c-label--small",
              inputWrapper
            )}>
            {`${t("int.email")}`}
            <Input
              type="email"
              onChange={(value) => setFormData({ ...formData, email: value })}
              value={formData.email}
              placeholder="Enter your email..."
            />
          </label>
        </div>
        <div className={"u-margin-bottom"}>
          <label
            className={cx(
              "c-label c-label--primary c-label--small",
              inputWrapper
            )}>
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
          <div className={cx("u-text-align-right", linkWrapper)}>
            <a href="/pin">Forgot your password?</a>
          </div>
        </div>
      </form>
      <div
        className={
          "u-margin-bottom c-btn c-btn--large c-btn--full c-btn--secondary"
        }>
        <div style={{}} className={cx("u-margin-bottom", buttonWrapper)}>
          <Button onClick={handleSubmit} variant="secondary" size="large" full>
            <span className={"t-xlarge"}>{`${t("int.login")}`}</span>
          </Button>
        </div>
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
