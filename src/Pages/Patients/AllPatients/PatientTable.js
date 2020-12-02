import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { PatientType, VisitType } from "types"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"
import { css } from "emotion"
import Table from "components/Table"
import { useI18n } from "providers/I18n"

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

PatientColumn.propTypes = {
  value: PatientType
}
function PatientColumn({ value }) {
  const { firstName, lastName, birthDate } = value

  const age = dayjs().from(dayjs(birthDate), true)
  return (
    <div>
      {firstName} {lastName}
      <div className={subrow}>{age} old</div>
    </div>
  )
}

LocationColumn.propTypes = {
  value: PatientType
}

function LocationColumn({ value }) {
  const { street, streetNumber, region, state } = value
  return (
    <div>
      {street} {streetNumber}
      <div className={subrow}>
        {region}, {state}
      </div>
    </div>
  )
}

LastVisitColumn.propTypes = {
  value: VisitType
}

function LastVisitColumn({ value }) {
  const { date, user } = value
  const lastVisit = dayjs(date).format("ll")
  return (
    <div>
      {lastVisit}
      <div className={subrow}>{user}</div>
    </div>
  )
}

ActionsColumn.propTypes = {
  value: PatientType
}

function ActionsColumn({ value }) {
  const { id } = value
  return (
    <div>
      <NavLink to={`patients/details/${id}`} className={viewAction}>
        <Translate arg={"int.view"} />
      </NavLink>
      <NavLink to={`patients/edit/${id}`} className={viewAction}>
        <Translate arg={"int.edit"} />
      </NavLink>
    </div>
  )
}

PatientTable.propTypes = {
  setPageInfo: PropTypes.func,
  resolvedData: PropTypes.object,
  pageInfo: PropTypes.object
}

export default function PatientTable({ setPageInfo, resolvedData, pageInfo }) {
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

const Translate = ({ arg }) => {
  const { t } = useI18n()
  return t(`${arg}`)
}

export const columns = [
  {
    Header: <Translate arg={"int.patient"} />,
    id: 1,
    accessor: (row) => row,
    Cell: PatientColumn
  },
  {
    Header: <Translate arg={"int.location"} />,
    id: 2,
    accessor: "address",
    Cell: LocationColumn
  },
  {
    Header: <Translate arg={"int.lastVisit"} />,
    id: 3,
    accessor: (row) => row,
    Cell: LastVisitColumn
  },
  {
    Header: <Translate arg={"int.actions"} />,
    id: 4,
    accessor: (row) => row,
    Cell: ActionsColumn
  }
]

const subrow = css`
  color: var(--global-grey-60);
  font-size: 15px;
  font-size: 0.94rem;
  line-height: 1.6;
`
const viewAction = css`
  color: var(--primary-60);
  font-size: 1.13rem;
  line-height: 1.33;
  margin-right: 10px;
`
