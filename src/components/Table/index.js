import React from "react"
import { useTable, useFlexLayout } from "react-table"
import PropTypes from "prop-types"
import { tr, th } from "./style"

export const columns = [
  {
    Header: "Patient",
    accessor: "patient"
  },
  {
    Header: "Location",
    accessor: "location"
    /*style: { hidden }*/
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

export const data = [
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

const Table = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200 // maxWidth is only used as a limit for resizing
    }),
    []
  )

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFlexLayout,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        // Let's make a column for selection
        ...columns
      ])
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0]
        selectionGroupHeader.canResize = false
      })
    }
  )

  return (
    <div {...getTableProps()}>
      <div>
        {headerGroups.map((headerGroup, i) => (
          <div key={i} {...headerGroup.getHeaderGroupProps({})}>
            {headerGroup.headers.map((column, j) => (
              <div key={j} {...column.getHeaderProps()} className={th}>
                {column.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <div key={i} {...row.getRowProps()} className={tr}>
              {row.cells.map((cell, j) => {
                return (
                  <div key={j} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.string,
  data: PropTypes.string
}

export default Table
