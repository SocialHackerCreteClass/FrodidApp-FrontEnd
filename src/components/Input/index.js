import React, { useState } from "react"
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
  type: PropTypes.string,
  name: PropTypes.string
}

function Input({
  className,
  onChange = () => {},
  value,
  errorMessage,
  disabled,
  search,

  type = "text",
  name
}) {
  const [inputData, setInputData] = useState("")
  const [inputName, setInputName] = useState(type)

  return (
    <input
      placeholder="Write here"
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
        setInputData(e.target.value)
        setInputName(e.target.name)
        console.log("For input", inputName, "data is ", inputData)
      }}
      value={value}
      disabled={disabled ? "disabled" : ""}
    />
  )
}

export default Input
