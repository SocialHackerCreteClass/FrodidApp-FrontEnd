import React from "react"
import PropTypes from "prop-types"
import { cx } from "emotion"
import {
  wrapper,
  primaryBtn,
  secondaryBtn,
  dangerBtn,
  ghostBtn
} from "./style.js"

const ButtonPropTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["small", "large"]),
  ghost: PropTypes.bool,
  href: PropTypes.string
}

function SubmitButton({ className, onClick = () => {}, size, href }) {
  return (
    <button
      href={href}
      onClick={(e) => {
        e.preventDefault()
        onClick(e.target.value)
      }}
      className={cx(
        wrapper,
        primaryBtn,
        { small: size === "small" },
        className
      )}>
      Submit
    </button>
  )
}
SubmitButton.propTypes = ButtonPropTypes

function LinkButton({
  className,
  onClick = () => {},
  type,
  size,
  ghost,
  href
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        onClick(e.target.value)
      }}
      className={cx(
        wrapper,
        { type: type === "primary" },
        { small: size === "small" },
        className
      )}>
      {}
    </a>
  )
}
LinkButton.propTypes = ButtonPropTypes
export default SubmitButton
