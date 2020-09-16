import React from "react"
import { UserType } from "types"
import Table from "components/Table"
import { NavLink } from "react-router-dom"
import { css } from "emotion"
import PropTypes from "prop-types"
import { useI18n } from "providers/I18n"

const ProfessionalsTable = ({ resolvedData, pageInfo, setPageInfo }) => {
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

export default ProfessionalsTable

ProfessionalsTable.propTypes = {
  users: UserType,
  resolvedData: UserType,
  setPageInfo: PropTypes.func,
  pageInfo: PropTypes.object
}

NameColumn.propTypes = {
  value: UserType
}

function NameColumn({ value }) {
  const { firstName, lastName } = value
  return <div>{`${firstName} ${lastName}`}</div>
}

LastVisitColumn.propTypes = {
  value: UserType
}

function LastVisitColumn({ value }) {
  const { patient, date } = value.lastvisit

  return (
    <div>
      {patient}
      <div className={subrow}>{date}</div>
    </div>
  )
}

ActionsColumn.propTypes = {
  value: UserType
}

function ActionsColumn({ value }) {
  const { id } = value
  return (
    <div>
      <NavLink to={`professionals/details/${id}`} className={viewAction}>
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
    Header: <Translate arg={"int.name"} />,
    accessor: (row) => row,
    id: 1,
    Cell: NameColumn
  },
  {
    Header: <Translate arg={"int.profession"} />,
    accessor: "profession"
  },
  {
    Header: <Translate arg={"int.lastVisit"} />,
    accessor: (row) => row,
    id: 3,
    Cell: LastVisitColumn
  },
  {
    Header: <Translate arg={"int.actions"} />,
    accessor: (row) => row,
    id: 4,
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
