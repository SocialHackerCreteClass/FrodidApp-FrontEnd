import React from "react"
import PropTypes from "prop-types"
import { AvatarCls } from "./styles"
import { cx } from "emotion"

Avatar.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
}

function Avatar({ className, active }) {
  return <span className={cx(AvatarCls, { active }, className)}>Active</span>
}

export default Avatar
