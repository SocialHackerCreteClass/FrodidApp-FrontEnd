import React, { useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import { Link } from "react-router-dom"
import { useI18n } from "providers/I18n"
import "./pin.css"

function Pin(props) {
  const { t } = useI18n()
  const [formData, setFormData] = useState({ pin: "" })

  function handleSubmit() {
    console.log(formData)
  }

  return (
    <div>
      <div className="u-margin-bottom-large">
        <div className="u-text-align-center">
          <h2 className="h6">
            <span>{`${t("int.pin_code")}`}</span>
          </h2>
        </div>
      </div>
      <div className="u-margin-bottom-large">
        <div className="u-margin-bottom-tiny">
          <label
            htmlFor="pin"
            className="c-label c-label--primary c-label--small">{`${t(
            "int.pin"
          )}`}</label>
        </div>
        <div>
          <Input
            placeholder={"Write Pin"}
            onChange={(value) => setFormData({ ...formData, pin: value })}
            value={formData.pin}
          />
        </div>
      </div>
      <div className="u-margin-bottom">
        <Button variant="secondary" full size={"large"} onClick={handleSubmit}>
          <span>{`${t("int.submit")}`}</span>
        </Button>
      </div>
      <div className="u-text-align-center">
        <Link to="/login">
          <span>{t("int.already-user")}</span>
        </Link>
      </div>
    </div>
  )
}

export default Pin
