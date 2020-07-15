import React from "react"
import PropTypes from "prop-types"
import { inputCls } from "./styles"
import { cx } from "emotion"

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  search: PropTypes.bool,
  type: PropTypes.string
}

function Input({
  className,
  onChange = () => {},
  value,
  errorMessage,
  disabled,
  search,
  type = "text"
}) {
  return (
    <input
      placeholder="Write here"
      className={cx(inputCls, {
        errorForm: Boolean(errorMessage),
        search,
        className
      })}
      type={search ? "search" : type}
      onChange={(e) => {
        e.preventDefault()
        onChange(e.target.value)
        console.log(e.target.type, e.target.value)
      }}
      value={value}
      disabled={disabled ? "disabled" : ""}
    />
  )
}

export default Input
