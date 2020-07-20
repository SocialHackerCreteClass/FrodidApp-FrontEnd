import React from "react"
import { PatientType, VisitType } from "types"
import { subrow } from "./style"

PatientColumn.propTypes = {
  value: PatientType
}

function PatientColumn({ value }) {
  const { firstName, lastName, age } = value
  return (
    <div>
      {firstName} {lastName}
      <div className={subrow}>{age} years old</div>
    </div>
  )
}

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
    accessor: "patient",
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
      age: 74
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
  },
  {
    patient: {
      firstName: "John",
      lastName: "Doe",
      age: 74
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
