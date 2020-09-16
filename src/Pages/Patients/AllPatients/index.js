import React, { useState } from "react"
import { usePaginatedQuery } from "react-query"
import { useI18n } from "providers/I18n"
import { getPatients } from "api/patients"
import PatientsTable from "./PatientTable"
import AllUsersTitle from "components/AllUsersTitle"
import { useHistory } from "react-router"

AllPatients.propTypes = {}

function AllPatients() {
  const history = useHistory()
  const [pageInfo, setPageInfo] = useState({ pageSize: 10, pageIndex: 0 })
  const { resolvedData = {}, isLoading } = usePaginatedQuery(
    ["allPatientsData", pageInfo],
    getPatients
  )

  const { t } = useI18n()
  if (isLoading) return "Loading..."

  return (
    <div>
      <AllUsersTitle
        title={t("int.patients")}
        total={resolvedData.total}
        btn={t("int.new_patient")}
        btnAction={() => history.push("/patients/create-new")}
      />
      <PatientsTable
        setPageInfo={setPageInfo}
        resolvedData={resolvedData}
        pageInfo={pageInfo}
      />
    </div>
  )
}

export default AllPatients
