import React from "react"
import { useI18n } from "providers/I18n"
import { headerContainer } from "./styles"
import Button from "../../../../src/components/Button/index.js"
import { cx } from "emotion"

import { PatientTable, patientData } from "Pages/TestPage/PatientTable"

AllPatients.propTypes = {}

function AllPatients() {
  const { t } = useI18n()

  return (
    <div>
      <div className={cx(headerContainer, "o-grid o-grid--middle")}>
        <div className={cx("u-margin-bottom-large u-margin-bottom-huge@wide")}>
          <h1 className={"h3 u-margin-bottom-none"}>{`${t(
            "int.patients"
          )}`}</h1>
          <p className={"u-small u-grey u-margin-bottom-none"}>
            {patientData.data.length} entries
          </p>
        </div>
        <div>
          <Button variant="secondary" size="large">
            <span className={"u-large u-uppercase u-letter-spacing u-bold"}>
              {t("int.patients_create_new")}
            </span>
          </Button>
        </div>
      </div>
      <PatientTable />
    </div>
  )
}

export default AllPatients
