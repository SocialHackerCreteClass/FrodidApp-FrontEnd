import React, { useEffect } from "react"
import { useI18n } from "providers/I18n"
import { getPatients } from "api/patients"

AllPatients.propTypes = {}

function AllPatients() {
  const { t } = useI18n()

  useEffect(() => {
    getPatients({ items_per_page: 5, page_number: 1 })
  }, [])

  return (
    <div>
      <h1>{t("int.all-patients-header", "patients")}</h1>
    </div>
  )
}

export default AllPatients
