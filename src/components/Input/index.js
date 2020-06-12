import React, { useState } from "react"
import PropTypes from "prop-types"
import { InputCls } from "./styles"
import { cx } from "emotion"

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string
}

function Input({ className, onChange, label, value, disabled, errorMessage }) {
  const [inputValue, setInputValue] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <form
      className="inputComponent"
      onSubmit={(e) => {
        e.preventDefault()
      }}>
      <label>
        This is an input Component
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault()
            setInputValue(e.target.value)
            console.log(inputValue)
          }}></input>
      </label>
    </form>
  )
}

export default Input
