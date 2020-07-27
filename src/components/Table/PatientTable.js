import React from "react"
import { PatientType, VisitType } from "types"
import { subrow } from "./style"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"
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

console.log()

LocationColumn.propTypes = {
  value: PatientType
}

function LocationColumn({ value }) {
  const { street, streetNumber, region, state } = value.address
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

export const columns = [
  {
    Header: "Patient",
    accessor: (row) => row,
    Cell: PatientColumn
  },
  {
    Header: "Location",
    accessor: (row) => row,
    Cell: LocationColumn
  },
  {
    Header: "Last Visit",
    accessor: (row) => row,
    Cell: LastVisitColumn
  },
  {
    Header: "Actions",
    accessor: "actions"
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
    id: 1,
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