import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

const flagWrapper = css`
  display: flex;
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
`

Flag.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(["right"])
}

function Flag({ className, direction, ...restProps }) {
  return (
    <div {...restProps} className={cx(flagWrapper, direction, className)} />
  )
}

export default Flag

const imgWrapper = css`
  padding-right: 24px;
  .${flagWrapper} > & {
    padding-right: 12px;
  }
`
FlagImg.propTypes = {
  className: PropTypes.string
}

export function FlagImg(props) {
  return <div {...props} className={cx(imgWrapper, props.className)} />
}

const bodyWrapper = css``
FlagBody.propTypes = {
  className: PropTypes.string
}

export function FlagBody(props) {
  return <div {...props} className={cx(bodyWrapper, props.className)} />
}

TextIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node
}

export function TextIcon(props) {
  return (
    <Flag>
      <FlagImg>{props.icon}</FlagImg>
      <FlagBody>{props.children}</FlagBody>
    </Flag>
  )
}
