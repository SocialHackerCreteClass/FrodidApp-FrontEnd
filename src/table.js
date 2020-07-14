import React from "react"
import { useTable, useFlexLayout } from "react-table"
// import { cx } from "emotion"
import PropTypes from "prop-types"
import { tr, th } from "./tableStyle"

export const columns =
  // useMemo(() =>
  [
    {
      Header: "Patient",
      accessor: "patient"
    },
    {
      Header: "Location",
      accessor: "location",
      style: { hidden }
    },
    {
      Header: "Last Visit",
      accessor: "lastVisit"
    },
    {
      Header: "Actions",
      accessor: "actions"
    }
  ]
// ,[])

export const data =
  // useMemo( () =>
  [
    {
      patient: "John Doe",
      location: "Ionias 35",
      lastVisit: "27/07/2020",
      actions: "view delete"
    },
    {
      patient: "John Doe",
      location: "Ionias 35",
      lastVisit: "27/07/2020",
      actions: "view delete"
    }
  ]
// ,[])

export const Table = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      width: 100
    }),
    []
  )

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    {
      useFlexLayout
    }
  )

  return (
    <div {...getTableProps()}>
      <div>
        {headerGroups.map((headerGroup, index) => (
          <div
            key={index}
            {...headerGroup.getHeaderGroupProps()}
            className={tr}>
            {headerGroup.headers.map((column, index) => (
              <div key={index} {...column.getHeaderProps()} className={th}>
                {column.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.string,
  data: PropTypes.string
}
