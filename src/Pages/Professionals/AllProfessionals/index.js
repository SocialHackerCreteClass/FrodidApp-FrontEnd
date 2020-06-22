import React from "react"
import { useI18n } from "providers/I18n"

AllProfessionals.propTypes = {}

function AllProfessionals() {
  const { t } = useI18n()
  return (
    <div>
      <h1>{t("int.all-professional-header", "professionals")}</h1>
    </div>
  )
}

export default AllProfessionals
