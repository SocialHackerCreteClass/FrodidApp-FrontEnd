import React from "react"
import { NavLink } from "react-router-dom"
import { VisitType } from "types"
import PropTypes from "prop-types"
import Table from "components/Table"
import { css } from "emotion"
import { useI18n } from "providers/I18n"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

VisitationsTable.propTypes = {
  setPageInfo: PropTypes.func,
  resolvedData: PropTypes.object,
  pageInfo: PropTypes.object
}

export default function VisitationsTable({
  setPageInfo,
  resolvedData,
  pageInfo
}) {
  return (
    <Table
      onChange={setPageInfo}
      columns={columns}
      data={resolvedData.data}
      pageIndex={pageInfo.pageIndex}
      pageSize={pageInfo.pageSize}
      total={resolvedData.total}
    />
  )
}

const Translate = ({ arg }) => {
  const { t } = useI18n()
  return t(`${arg}`)
}

DateColumn.propTypes = { value: VisitType }

function DateColumn({ value }) {
  const { startTime, endTime, date } = value
  let hour = dayjs(endTime).diff(startTime, "h")
  let minutes = dayjs(endTime).diff(startTime, "m") % 60
  let duration = `${hour}h ${minutes}min`

  return (
    <div>
      {date}
      <div className={subrow}>{duration}</div>
    </div>
  )
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

export const columns = [
  {
    Header: <Translate arg={"int.patient"} />,
    accessor: "patient"
  },
  {
    Header: <Translate arg={"int.professional"} />,
    accessor: "user"
  },
  {
    Header: <Translate arg={"int.date_duration"} />,
    id: 3,
    accessor: (row) => row,
    Cell: DateColumn
  },
  {
    Header: <Translate arg={"int.actions"} />,
    id: 4,
    accessor: (row) => row,
    Cell: ActionsColumn
  }
]

const viewAction = css`
  color: var(--primary-60);
  font-size: 1.13rem;
  line-height: 1.33;
`

const subrow = css`
  color: var(--global-grey-60);
  font-size: 15px;
  font-size: 0.94rem;
  line-height: 1.6;
`
