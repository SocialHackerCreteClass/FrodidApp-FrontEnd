import React from "react"
import { PatientType, VisitType } from "types"
import { subrow } from "./style"
import moment from "moment"

PatientColumn.propTypes = {
  value: PatientType
}
function PatientColumn({ value }) {
  console.log(value)
  const { firstName, lastName, birthDate } = value.patient
  return (
    <div>
      {firstName} {lastName}
      <div className={subrow}>{birthDate} years old</div>
    </div>
  )
}

console.log()

LocationColumn.propTypes = {
  value: PatientType
}

function LocationColumn({ value }) {
  const { address, region } = value
  return (
    <div>
      {address}
      <div className={subrow}>{region}</div>
    </div>
  )
}

LastVisitColumn.propTypes = {
  value: VisitType
}

function LastVisitColumn({ value }) {
  const { date, assignedTo } = value
  return (
    <div>
      {date}
      <div className={subrow}>{assignedTo}</div>
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
    accessor: "location",
    Cell: LocationColumn
  },
  {
    Header: "Last Visit",
    accessor: "lastVisit",
    Cell: LastVisitColumn
  },
  {
    Header: "Actions",
    accessor: "actions"
  }
]
export const data = [
  {
    patient: {
      firstName: "Giannis",
      lastName: "Doe",
      birthDate: (date) => {
        date = "27/3/1985"
        return moment(date).fromNow
      }
    },
    location: {
      address: "Leoforos Ionias 35",
      region: "Herakleion"
    },
    lastVisit: {
      date: "Jul 27th, 2020",
      assignedTo: "Mary Doe"
    },
    actions: "view delete",
    id: "1"
  },
  {
    patient: {
      firstName: "John",
      lastName: "Doe",
      birthDate: (date) => {
        date = "27/3/1975"
        return moment(date).fromNow
      }
    },
    location: {
      address: "Leoforos Ionias 35",
      region: "Herakleion"
    },
    lastVisit: {
      date: "Jul 27th, 2020",
      assignedTo: "Mary Doe"
    },
    actions: "view delete"
  }
]
