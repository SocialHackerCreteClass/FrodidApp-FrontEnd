import React from "react"
import PropTypes from "prop-types"
import { badgeCls } from "./styles"
import { cx } from "emotion"

Badge.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
}

function Badge({ className, active }) {
  return <span className={cx(badgeCls, { active }, className)}>Active</span>
}

export default Badge
