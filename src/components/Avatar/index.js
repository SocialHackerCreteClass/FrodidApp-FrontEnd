import React from "react"
import PropTypes from "prop-types"
import { cx } from "emotion"
import { imgWrapper, wrapper } from "./styles"

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["medium", "large"]),
  src: PropTypes.string
}

function Avatar({ size = "medium", src, className }) {
  return (
    <div className={cx(wrapper, { large: size === "large" }, className)}>
      <div className={imgWrapper}>
        <img src={src} alt="avatar" />
      </div>
    </div>
  )
}

export default Avatar
