import React from "react"
import { useI18n } from "providers/I18n"
import { headerContainer } from "./styles"
import Button from "../../../../src/components/Button/index.js"
import { cx } from "emotion"

import Table from "components/Table/index.js"
import { data, columns } from "Pages/TestPage/PatientTable"

AllPatients.propTypes = {}

function AllPatients() {
  const { t } = useI18n()

  return (
    <div>
      <div className={headerContainer}>
        <div className={cx("u-margin-bottom-large u-margin-bottom-huge@wide")}>
          <h1 className={"h3 u-margin-bottom-none"}>{`${t(
            "int.patients"
          )}`}</h1>
          <p>## entries</p>
        </div>
        <div>
          <Button variant="secondary" size="large">
            <span className={"u-large u-uppercase u-letter-spacing u-bold"}>
              {`${t("int.patient_new")}`}
            </span>
          </Button>
        </div>
      </div>
      <Table />
    </div>
  )
}

export default AllPatients
