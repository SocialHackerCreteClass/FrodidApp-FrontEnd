import React from "react"
import PropTypes from "prop-types"
import { cx } from "emotion"
import {
  buttonCls,
  primaryBtn,
  secondaryBtn,
  dangerBtn,
  ghostBtn
} from "./style.js"

const ButtonPropTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "large"]),
  ghost: PropTypes.bool
}

function SubmitButton({ className, onClick = () => {}, size, variant }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick(e.target.value)
      }}
      className={cx(
        buttonCls,
        primaryBtn,
        { small: size === "small" },
        { primary: variant === "primary" },
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
  size,
  variant,
  disable,
  ghost
}) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault()
        onClick(e.target.value)
      }}
      className={cx(
        buttonCls,
        { small: size === "small" },
        { secondary: variant === "secondary" },
        { danger: variant === "danger" },
        { disable },
        { ghost },
        className
      )}>
      {}
    </a>
  )
}
LinkButton.propTypes = ButtonPropTypes

const Button = ({ type, ...restProps }) =>
  type === "submit" ? (
    <SubmitButton {...restProps} />
  ) : (
    <LinkButton {...restProps} />
  )
export default Button
