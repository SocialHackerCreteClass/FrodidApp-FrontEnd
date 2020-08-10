import React from "react"
import { useI18n } from "providers/I18n"
import { headerContainer, buttonWrapper } from "./styles"
import Button from "../../../../src/components/Button/index.js"
import { cx } from "emotion"

AllPatients.propTypes = {}

function AllPatients() {
  const { t } = useI18n()

  return (
    <div>
      <div className={headerContainer}>
        <div className={cx("u-margin-bottom-large u-margin-bottom-huge@wide")}>
          <h1 className={"h3 u-margin-bottom-none"}>Patients</h1>
          <p>## entries</p>
        </div>
        <div className={buttonWrapper}>
          <Button variant="secondary" size="large">
            <span className={"u-large u-uppercase u-letter-spacing u-bold"}>
              NEW PATIENT
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AllPatients
