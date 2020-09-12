import React, { useState } from "react"
import { useI18n } from "providers/I18n"
import { usePaginatedQuery } from "react-query"

import AllUsersTitle from "../../../components/AllUsersTitle"
import ProfessionalsTable from "./ProfessionalsTable"
import { getProfessionals } from "api/professionals"

AllProfessionals.propTypes = {}

function AllProfessionals() {
  const { t } = useI18n()

  const [pageInfo, setPageInfo] = useState({ pageSize: 10, pageIndex: 0 })

  const { isLoading, resolvedData = {} } = usePaginatedQuery(
    ["allProfessionals", { ...pageInfo }],
    getProfessionals
  )

  if (isLoading) return "Loading..."

  return (
    <div>
      <AllUsersTitle
        total={resolvedData.total}
        title={t("int.professionals")}
        btn={t("int.new_professional")}
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
