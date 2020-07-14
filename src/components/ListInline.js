import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

const listWrapper = css`
  margin-left: 0;
  list-style: none;
`
ListInline.propTypes = {
  className: PropTypes.string
}

function ListInline(props) {
  return <ul {...props} className={cx(listWrapper, props.className)} />
}

export default ListInline

const itemWrapper = css`
  display: inline-block;
`
ListInlineItem.propTypes = {
  className: PropTypes.string
}

export function ListInlineItem(props) {
  return <li {...props} className={cx(itemWrapper, props.className)} />
}
