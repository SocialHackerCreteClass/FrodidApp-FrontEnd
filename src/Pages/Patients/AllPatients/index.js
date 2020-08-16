import React from "react"
import { useI18n } from "providers/I18n"
<<<<<<< HEAD
import { headerContainer, buttonWrapper } from "./styles"
import Button from "../../../../src/components/Button/index.js"
import { cx } from "emotion"
=======
>>>>>>> parent of 68efac8... .

AllPatients.propTypes = {}

function AllPatients() {
  const { t } = useI18n()
<<<<<<< HEAD

  return (
    <div>
      <div className={headerContainer}>
        <div className={cx("u-margin-bottom-large u-margin-bottom-huge@wide")}>
          <h1 className={"h3 u-margin-bottom-none"}>{`${t(
            "int.patients"
          )}`}</h1>
          <p>## entries</p>
        </div>
        <div className={buttonWrapper}>
          <Button variant="secondary" size="large">
            <span className={"u-large u-uppercase u-letter-spacing u-bold"}>
              {`${t("int.patient_new")}`}
            </span>
          </Button>
        </div>
      </div>
=======
  return (
    <div>
      <h1>{t("int.all-patients-header", "patients")}</h1>
>>>>>>> parent of 68efac8... .
    </div>
  )
}

export default AllPatients
