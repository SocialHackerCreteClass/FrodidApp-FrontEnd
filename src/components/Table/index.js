import React from "react"
import { useTable, useFlexLayout } from "react-table"
import PropTypes from "prop-types"
import { tr, th, tableStyle } from "./style"

const Table = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 200, // width is used for both the flex-basis and flex-grow 150
      maxWidth: 250 // maxWidth is only used as a limit for resizing 200
    }),
    []
  )

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFlexLayout
  )

  return (
    <div {...getTableProps()} className={tableStyle}>
      {/* TABLE HEAD */}
      <div>
        {headerGroups.map((headerGroup, i) => (
          <div key={i} {...headerGroup.getHeaderGroupProps({})} className={th}>
            {headerGroup.headers.map((column, j) => (
              <div key={j} {...column.getHeaderProps()}>
                {column.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* TABLE BODY */}
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
