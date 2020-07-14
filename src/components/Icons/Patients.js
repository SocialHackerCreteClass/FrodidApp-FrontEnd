import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

Patients.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"])
}

function Patients({ type = "primary", className }) {
  return (
    <svg
      className={cx(wrapper, { secondary: type === "secondary" }, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256">
      <g fill="currentColor">
        <path d="M255.999 79.4671V57.7989c0-12.7725-10.391-23.164-23.163-23.164H93.3488l-6.6085-13.006C82.7683 13.814 74.8559 8.9595 66.0899 8.9595H23.163C10.3915 8.9595 0 19.3505 0 32.1224V217.124c0 16.496 13.4205 29.916 29.9154 29.916H226.084c16.495 0 29.915-13.42 29.916-29.915v-18.617c0-3.919-3.176-7.095-7.095-7.095-3.919 0-7.096 3.176-7.096 7.095v18.617c0 8.671-7.054 15.725-15.724 15.725H29.9154c-8.6709 0-15.7244-7.054-15.7244-15.725V86.6834h227.618v70.2446c0 3.919 3.176 7.095 7.095 7.095 3.919 0 7.096-3.176 7.096-7.095V79.5879c0-.0403-.001-.0806-.001-.1208zM14.191 72.4908h227.618V57.7989c0-4.9475-4.025-8.973-8.972-8.973H88.9958c-2.6705 0-5.116-1.5-6.3255-3.881l-8.5814-16.887c-1.5385-3.0275-4.6035-4.908-7.9985-4.908H23.163c-4.9475.0005-8.972 4.026-8.972 8.973v40.3679z" />
      </g>
    </svg>
  )
}

export default Patients

const wrapper = css`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  display: inline-block;
  color: var(--primary-90);
  &.secondary {
    color: var(--secondary-70);
  }
`
