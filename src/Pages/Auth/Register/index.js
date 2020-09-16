import React, { useState, useMemo } from "react"
import { useQuery } from "react-query"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"
import { getUserData } from "api/auth.js"
import { convertToDate } from "utils/index.js"
import { useHistory } from "react-router"
import { cx } from "emotion"

import { submitBtn, emailInput, inputWrapper } from "./styles"

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
    },
    refetchOnWindowFocus: false
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
      <h3 className={"u-margin-bottom-large u-text-align-center h6"}>
        {t("int.register")}
      </h3>

      <form>
        <div className={"u-margin-bottom u-margin-bottom-tiny"}>
          <label className={cx("c-label c-label--primary c-label--small")}>
            {`${t("int.firstName")}`}

            <div className={cx("u-margin-bottom", inputWrapper)}>
              <Input disabled value={formData.firstName} />
            </div>
          </label>
        </div>
        <div className={cx("u-margin-bottom u-margin-bottom-tiny")}>
          <label className={"c-label c-label--primary c-label--small"}>
            {`${t("int.lastName")}`}
            <div className={cx("u-margin-bottom", inputWrapper)}>
              <Input disabled value={formData.lastName} />
            </div>
          </label>
        </div>
        <div className={cx("u-margin-bottom u-margin-bottom-tiny")}>
          <label className={"c-label c-label--primary c-label--small"}>
            {`${t("int.dateOfBirth")}`}

            <div className={cx("u-margin-bottom", inputWrapper)}>
              <Input
                type="date"
                disabled
                value={convertToDate(formData.birthDate)}
              />
            </div>
          </label>
        </div>
        <div className={cx("u-margin-bottom u-margin-bottom-tiny")}>
          <label className={"c-label c-label--primary c-label--small"}>
            {`${t("int.profession")}`}
            <div className={cx("u-margin-bottom", inputWrapper)}>
              {" "}
              <Input disabled value={formData.profession} />
            </div>
          </label>
        </div>
        <div className={cx("u-margin-bottom u-margin-bottom-tiny")}>
          <label className={"c-label c-label--primary c-label--small"}>
            {`${t("int.email")}`}
            <div className={cx("u-margin-bottom", emailInput, inputWrapper)}>
              <Input
                type="email"
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder={t("int.placeholderEmail")}
                value={formData.email}
              />
            </div>
          </label>
        </div>
        <div className={cx("u-margin-bottom u-margin-bottom-tiny")}>
          <label className={"c-label c-label--primary c-label--small"}>
            {`${t("int.password")}`}
            <div className={cx("u-margin-bottom", inputWrapper)}>
              <Input
                onChange={(value) =>
                  setFormData({ ...formData, password: value })
                }
                type="password"
                value={formData.password}
                placeholder={t("int.placeholderPassword")}
              />
            </div>
          </label>
        </div>
        <div className={cx("u-margin-bottom u-margin-bottom-tiny")}>
          <label className={"c-label c-label--primary c-label--small"}>{`${t(
            "int.passwordConfirmed"
          )}`}</label>
          <div className={cx("u-margin-bottom", inputWrapper)}>
            <Input
              onChange={(value) =>
                setFormData({ ...formData, passwordConfirmed: value })
              }
              type="password"
              value={formData.passwordConfirmed}
              placeholder={t("int.passwordConfirmed")}
            />
          </div>
        </div>
        <div className={cx("u-margin-bottom", submitBtn)}>
          <Button variant="secondary" size="large" full onClick={handleSubmit}>
            {`${t("int.submit")}`}{" "}
          </Button>
        </div>
      </form>

      <div className={"u-text-align-center"}>
        <a href="/login">{t("int.already-user")}</a>
      </div>
    </div>
  )
}

export default Register
