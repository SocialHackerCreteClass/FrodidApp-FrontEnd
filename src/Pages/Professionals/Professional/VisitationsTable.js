import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { UserType, VisitType } from "types"
import Table from "components/Table"
import { css } from "emotion"
import { useI18n } from "providers/I18n"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { usePaginatedQuery } from "react-query"
import { getProfessionalVisits } from "api/visits"
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

VisitationsTable.propTypes = { user: UserType }

export default function VisitationsTable({ user }) {
  const [pageInfo, setPageInfo] = useState({ pageSize: 5, pageIndex: 0 })

  const { resolvedData = {} } = usePaginatedQuery(
    ["professionalVisits", { id: user.id, ...pageInfo }],
    getProfessionalVisits
  )

  return (
    <Table
      onChange={setPageInfo}
      columns={columns}
      data={resolvedData.data}
      total={resolvedData.total}
      pageIndex={pageInfo.pageIndex}
      pageSize={pageInfo.pageSize}
    />
  )
}

DurationColumn.propTypes = {
  value: VisitType
}

function DurationColumn({ value }) {
  const { startTime, endTime } = value
  let hour = dayjs(endTime).diff(startTime, "h")
  let minutes = dayjs(endTime).diff(startTime, "m") % 60

  return <div>{`${hour}h ${minutes}min`}</div>
}

ActionsColumn.propTypes = {
  value: VisitType
}

function ActionsColumn({ value }) {
  const { id } = value
  return (
    <div>
      <NavLink to={`/visits/details/${id}`} className={viewAction}>
        <Translate arg={"int.view"} />
      </NavLink>
    </div>
  )
}

const Translate = ({ arg }) => {
  const { t } = useI18n()
  return t(`${arg}`)
}

export const columns = [
  {
    Header: <Translate arg={"int.date"} />,
    accessor: "date"
  },
  {
    Header: <Translate arg={"int.patient"} />,
    accessor: "patient"
  },
  {
    Header: <Translate arg={"int.duration"} />,
    id: 1,
    accessor: (row) => row,
    Cell: DurationColumn
  },
  {
    Header: <Translate arg={"int.actions"} />,
    accessor: (row) => row,
    id: 2,
    Cell: ActionsColumn
  }
]

const viewAction = css`
  color: var(--primary-60);
  font-size: 1.13rem;
  line-height: 1.33;
`
