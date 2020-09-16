import React, { useState } from "react"
import { useI18n } from "providers/I18n"
import { usePaginatedQuery } from "react-query"

import AllUsersTitle from "components/AllUsersTitle"
import ProfessionalsTable from "./ProfessionalsTable"
import { getProfessionals } from "api/professionals"
import { useHistory } from "react-router"

AllProfessionals.propTypes = {}

function AllProfessionals() {
  const { t } = useI18n()
  const history = useHistory()

  const [pageInfo, setPageInfo] = useState({ pageSize: 10, pageIndex: 0 })

  const { isLoading, resolvedData = {} } = usePaginatedQuery(
    ["allProfessionals", pageInfo],
    getProfessionals
  )

  if (isLoading) return "Loading..."

  return (
    <div>
      <AllUsersTitle
        total={resolvedData.total}
        title={t("int.professionals")}
        btn={t("int.new_professional")}
        btnAction={() => history.push("/professionals/create-new")}
      />
      <ProfessionalsTable
        resolvedData={resolvedData}
        setPageInfo={setPageInfo}
        pageInfo={pageInfo}
      />
    </div>
  )
}

export default AllProfessionals
