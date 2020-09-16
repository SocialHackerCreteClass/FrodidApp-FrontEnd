import React, { useState } from "react"
import { usePaginatedQuery } from "react-query"
import { useI18n } from "providers/I18n"

import { getAllVisitations } from "api/visitations"
import AllUsersTitle from "components/AllUsersTitle"
import VisitationsTable from "./VisitationsTable"
import { useHistory } from "react-router"

AllVisits.propTypes = {}

function AllVisits() {
  const { t } = useI18n()
  const history = useHistory()
  const [pageInfo, setPageInfo] = useState({ pageSize: 10, pageIndex: 0 })
  const { isLoading, resolvedData = {} } = usePaginatedQuery(
    ["allVisitationsData", { ...pageInfo }],
    getAllVisitations
  )

  if (isLoading) return "Loading..."

  return (
    <div>
      <AllUsersTitle
        title={t("int.visitations")}
        total={resolvedData.total}
        btn={t("int.add_visitation_btn")}
        btnAction={() => history.push("/visits/create-new")}
      />
      <VisitationsTable
        setPageInfo={setPageInfo}
        pageInfo={pageInfo}
        resolvedData={resolvedData}
      />
    </div>
  )
}

export default AllVisits
