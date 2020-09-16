import React, { useEffect, useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"
import { cx } from "emotion"
import { buttonWrapper, linkWrapper, inputWrapper } from "./styles"
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
    <div className={"o-wrapper u-padding-horizontal-none g-forms g-narrow"}>
      <h2 className={"u-margin-bottom-large u-text-align-center h6"}>{`${t(
        "int.login"
      )}`}</h2>
      <form>
        <div className={"u-margin-bottom"}>
          <label className={inputWrapper}>
            {`${t("int.email")}`}
            <Input
              type="email"
              onChange={(value) => setFormData({ ...formData, email: value })}
              value={formData.email}
              placeholder={t("int.placeholderEmail")}
            />
          </label>
        </div>
        <div className={"u-margin-bottom"}>
          <label className={inputWrapper}>
            {`${t("int.password")}`}
            <Input
              onChange={(value) =>
                setFormData({ ...formData, password: value })
              }
              type="password"
              value={formData.password}
              placeholder={t("int.placeholderPassword")}
            />
          </label>
          <div className={cx("u-text-align-right", linkWrapper)}>
            <a href="/pin">{t("int.password_forgot")}</a>
          </div>
        </div>
      </form>
      <div className={"u-margin-bottom"}>
        <div className={cx("u-margin-bottom", buttonWrapper)}>
          <Button onClick={handleSubmit} variant="secondary" size="large" full>
            <span className={"t-xlarge"}>{`${t("int.login")}`}</span>
          </Button>
        </div>
      </div>

      <div className={linkWrapper}>
        <a href="/pin">
          <span>{t("int.no_account")}</span>
        </a>
      </div>
    </div>
  )
}

export default Login
