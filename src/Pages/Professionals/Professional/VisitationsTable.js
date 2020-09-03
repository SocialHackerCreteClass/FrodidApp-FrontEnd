import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { VisitType } from "types"
import Table from "components/Table"
import { sleep } from "utils"
import { css } from "emotion"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

export default function VisitationsTable() {
  const [pageInfo, setPageInfo] = useState({ pageSize: 5, pageIndex: 0 })
  const [data, setData] = useState({
    total: 0,
    data: []
  })

  useEffect(() => {
    getData(pageInfo).then(setData)
  }, [pageInfo])

  return (
    <Table
      onChange={setPageInfo}
      columns={columns}
      data={data.data}
      total={data.total}
      pageIndex={pageInfo.pageIndex}
      pageSize={pageInfo.pageSize}
    />
  )
}

const getData = async ({ pageSize, pageIndex }) => {
  await sleep(3000)
  return {
    total: visitData.total,
    pageIndex,
    pageSize,
    data: visitData.data.slice(
      pageIndex * pageSize,
      Math.min(visitData.data.length, pageIndex * pageSize + pageSize)
    )
  }
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
      <NavLink to={`patients/details/${id}`} className={viewAction}>
        View
      </NavLink>
    </div>
  )
}

export const columns = [
  {
    Header: "Date",
    accessor: "date"
  },
  {
    Header: "Patient",
    accessor: "patient"
  },
  {
    Header: "Duration",
    accessor: (row) => row,
    Cell: DurationColumn
  },
  {
    Header: "Actions",
    accessor: (row) => row,
    Cell: ActionsColumn
  }
]

export const visitData = {
  total: 10,
  data: [
    {
      id: 1,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 14:45",
      patient: "Mary White"
    },
    {
      id: 2,
      date: "12/3/2020",
      startTime: "1990-12-01 13:25",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    },
    {
      id: 3,
      date: "12/3/2020",
      startTime: "1990-12-01 09:00",
      endTime: "1990-12-01 11:00",
      patient: "Mary White"
    },
    {
      id: 4,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    },
    {
      id: 5,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    },
    {
      id: 6,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    },
    {
      id: 7,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    },
    {
      id: 8,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    },
    {
      id: 9,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    },
    {
      id: 10,
      date: "12/3/2020",
      startTime: "1990-12-01 13:00",
      endTime: "1990-12-01 15:45",
      patient: "Mary White"
    }
  ]
}

const viewAction = css`
  color: var(--primary-60);
  font-size: 1.13rem;
  line-height: 1.33;
`
