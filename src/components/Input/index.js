import React from "react"
import PropTypes from "prop-types"
import { inputCls } from "./styles"
import { cx } from "emotion"

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  search: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

function Input({
  className,
  onChange = () => {},
  errorMessage,
  disabled,
  search,
  value,
  type = "text",
  name,
  placeholder
}) {
  return (
    <input
      placeholder={placeholder}
      className={cx(inputCls, {
        errorForm: Boolean(errorMessage),
        search,
        className
      })}
      type={search ? "search" : type}
      name={name}
      onChange={(e) => {
        e.preventDefault()
        onChange(e.target.value)
      }}
      value={value}
      disabled={disabled ? "disabled" : ""}
    />
  )
}

export default Input
