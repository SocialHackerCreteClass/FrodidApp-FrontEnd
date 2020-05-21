import React from "react"
import { useI18n } from "providers/I18n"

AllVisits.propTypes = {}

function AllVisits() {
  const { t } = useI18n()
  return (
    <div>
      <h1>{t("int.all-visit-header", "visits")}</h1>
    </div>
  )
}

export default AllVisits
