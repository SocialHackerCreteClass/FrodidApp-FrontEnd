import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

const gridWrapper = css`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  margin-left: -24px;
`

Grid.propTypes = {
  className: PropTypes.string,
  gapSize: PropTypes.oneOf([])
}

function Grid(props) {
  return <div {...props} className={cx(gridWrapper, props.className)} />
}

export default Grid

const cellWrapper = css`
  .${gridWrapper} & {
    padding-left: 24px;
  }
  flex: 0 1 auto;
  width: 100%;
`

GridCell.propTypes = {
  className: PropTypes.string
}

export function GridCell(props) {
  return <div {...props} className={cx(cellWrapper, props.className)} />
}
