import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

const flagWrapper = css`
  display: flex;
  align-items: center;
  &--right {
    justify-content: flex-end;
  }
`

Flag.propTypes = {
  className: PropTypes.string,
  gapSize: PropTypes.oneOf(["small"]),
  direction: PropTypes.oneOf(["right"])
}

function Flag(props) {
  return <div {...props} className={cx(flagWrapper, props.className)} />
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
