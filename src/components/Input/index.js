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

//test comment 2

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
  const [isDisabled, setIsDisabled] = useState(false)
  const [error, setError] = useState(false)

  errorMessage = "We are sorry, an error occured. Please try again."

  return (
    <div
      className={cx(
        wrapper,
        { success, errorForm, disabled, search },
        className
      )}>
      <input
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
