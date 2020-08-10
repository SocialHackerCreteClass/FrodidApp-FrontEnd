import React from "react"
import { useI18n } from "providers/I18n"
import { headerContainer, headerSide } from "./styles"
import Button from "../../../../src/components/Button/index.js"
import { cx } from "emotion"

AllPatients.propTypes = {}

function AllPatients() {
  //const { t } = useI18n()

  return (
    <div>
      <div className={headerContainer}>
        <div
          className={cx(
            headerSide,
            "u-margin-bottom-large u-margin-bottom-huge@wide"
          )}>
          <h1>Patients</h1>
          <p>## entries</p>
        </div>
        <div className={headerSide}>
          <Button variant="secondary" size="large">
            NEW PATIENT
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AllPatients
