import React from "react"
import { useI18n } from "providers/I18n"
import { headerContainer, containerHalf } from "./styles"
import Button from "../../../../src/components/Button/index.js"
import { cx } from "emotion"

import { PatientTable, patientData } from "Pages/TestPage/PatientTable"

AllPatients.propTypes = {}

function AllPatients() {
  const { t } = useI18n()

  return (
    <div>
      <div
        className={cx("u-margin-bottom-large", headerContainer)}
        style={{ backgroundColor: "blue", padding: "10px" }}>
        <div className={cx(containerHalf, "o-grid__cell u-1/1 u-1/2@tablet")}>
          <h1 className="h3 u-margin-bottom-none">{`${t("int.patients")}`}</h1>
          <p className="u-small u-grey u-margin-bottom-none">
            {patientData.data.length} entries
          </p>
        </div>

        <div>
          <div className={cx(containerHalf, "o-grid__cell u-1/1 u-1/2@tablet")}>
            {" "}
            <Button variant="secondary" size="large">
              <span className="u-large u-uppercase u-letter-spacing u-bold">
                {t("int.patients_create_new")}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <PatientTable />
    </div>
  )
}

export default AllPatients
