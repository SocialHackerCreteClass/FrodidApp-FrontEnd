import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

const listWrapper = css`
  margin-left: 0;
  list-style: none;
`
ListBare.propTypes = {
  className: PropTypes.string
}

function ListBare(props) {
  return <ul {...props} className={cx(listWrapper, props.className)} />
}

export default ListBare
