import React from "react"
import { useI18n } from "providers/I18n"

AllPatients.propTypes = {}

function AllPatients() {
  const { t } = useI18n()

  return (
    <div>
      <h1>{t("int.all-patients-header", "patients")}</h1>
    </div>
  )
}

export default AllPatients
