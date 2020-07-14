import React from "react"
import PropTypes from "prop-types"
import { cx } from "emotion"
import { buttonCls } from "./style.js"

const ButtonPropTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "large"]),
  ghost: PropTypes.bool,
  full: PropTypes.bool,
  children: PropTypes.string
}

function SubmitButton({
  className,
  onClick = () => {},
  size,
  variant,
  type,
  full,
  children
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cx(buttonCls, variant, size, { full }, className)}>
      {children}
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
  full,
  ghost,
  children
}) {
  return (
    <a
      href="/#"
      onClick={(ev) => {
        ev.preventDefault()
        onClick()
      }}
      className={cx(
        buttonCls,
        variant,
        size,
        { disable },
        { ghost },
        { full },
        className
      )}>
      {children}
    </a>
  )
}
LinkButton.propTypes = ButtonPropTypes

const Button = ({ type, variant = "primary", ...restProps }) =>
  type === "submit" ? (
    <SubmitButton type={type} variant={variant} {...restProps} />
  ) : (
    <LinkButton variant={variant} {...restProps} />
  )

Button.propTypes = ButtonPropTypes
export default Button
