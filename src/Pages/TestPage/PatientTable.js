import React from "react"
import { NavLink } from "react-router-dom"
import { PatientType, VisitType } from "types"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"
import { css } from "emotion"
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
        View
      </NavLink>
    </div>
  )
}

export const columns = [
  {
    Header: "Patient",
    accessor: (row) => row,
    Cell: PatientColumn
  },
  {
    Header: "Location",
    accessor: "address",
    Cell: LocationColumn
  },
  {
    Header: "Last Visit",
    accessor: (row) => row,
    Cell: LastVisitColumn
  },
  {
    Header: "Actions",
    accessor: (row) => row,
    Cell: ActionsColumn
  }
]
export const data = [
  {
    id: 1,
    firstName: "Giannis",
    lastName: "Doe",
    birthDate: "1986-05-03",
    address: {
      street: "Leoforos Ionias",
      streetNumber: "35",
      region: "Mastampas",
      country: "Greece",
      state: "Heraklion"
    },
    date: "2019-12-27",
    user: "Mary Doe"
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    birthDate: "1930-12-30",
    address: {
      street: "Leoforos Ionias",
      streetNumber: "35",
      region: "Mastampas",
      country: "Greece",
      state: "Heraklion"
    },
    date: "2020-06-27",
    user: "Mary Doe"
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
`
