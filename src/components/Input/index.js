import React, { useState } from "react"
import PropTypes from "prop-types"
import { inputCls, wrapper } from "./styles"
import { cx } from "emotion"

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string
}

function Input({
  className,
  onChange,
  label,
  value,
  errorMessage,
  success,
  errorForm,
  disabled,
  search
}) {
  const [inputValue, setInputValue] = useState("")

  return (
    <div
      className={cx(
        wrapper,
        { success, errorForm, disabled, search },
        className
      )}>
      <input
        placeholder="Write here"
        className={inputCls}
        type="text"
        onChange={(e) => {
          e.preventDefault()
          setInputValue(e.target.value)
        }}
        disabled={disabled ? "disabled" : ""}
      />
    </div>
  )
}

export default Input
