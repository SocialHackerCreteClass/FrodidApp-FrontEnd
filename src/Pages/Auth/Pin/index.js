import React, { useState } from "react"
import { cx } from "emotion"
import Input from "components/Input"
import Button from "components/Button"
import { Link } from "react-router-dom"
import { useI18n } from "providers/I18n"

function Pin(props) {
  const { t } = useI18n()
  const [formData, setFormData] = useState({ pin: "" })

  function handleSubmit() {
    console.log(formData)
  }

  return (
    <div>
      <h3>{`${t("int.pin_code")}`}</h3>
      <form>
        <label>
          {`${t("int.pin")}`}
          <Input
            type="password"
            onChange={(value) => setFormData({ ...formData, email: value })}
            value={formData.pin}
          />
        </label>

        <Button variant="secondary" size={"large"} onClick={handleSubmit}>{`${t(
          "int.submit"
        )}`}</Button>
      </form>
      <Link to="/login">{t("int.already-user")}</Link>
    </div>
  )
}

export default Pin
