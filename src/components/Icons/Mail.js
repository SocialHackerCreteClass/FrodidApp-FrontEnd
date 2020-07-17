import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

Mail.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "default"])
}

function Mail({ color, size, className }) {
  return (
    <svg
      className={cx(wrapper, size, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      style={{ color }}>
      <g fill="currentColor">
        <path d="M255.589 13.2137c-.016-.0481-.016-.1121-.032-.1761-.384-.9764-.945-1.9047-1.729-2.705-.144-.1441-.32-.1921-.464-.3202-.112-.096-.128-.24-.24-.3361-.208-.16-.464-.16-.688-.3041-.801-.5282-1.633-.8964-2.529-1.1044-.352-.08-.673-.1761-1.041-.2081-1.264-.128-2.545-.032-3.745.4482L5.0285 104.529c-2.9612 1.168-4.946 4.001-5.026 7.203-.08 3.201 1.7447 6.13 4.6578 7.474l91.3792 42.177v78.606c0 3.585 2.3849 6.739 5.8265 7.699.72.208 1.456.304 2.177.304 2.737 0 5.33-1.409 6.818-3.809l36.302-59.191 65.577 30.267c1.057.465 2.209.721 3.346.721 1.296 0 2.577-.32 3.745-.929 2.209-1.168 3.746-3.297 4.146-5.762l32.012-192.0578c.032-.1601-.064-.3041-.048-.4642.128-1.2004.064-2.4009-.352-3.5533zM102.394 146.689l-74.1566-34.221L213.621 38.3273 102.394 146.689zm9.652 64.953v-42.864l20.472 9.459-20.472 33.405zm97.877-15.334l-91.955-42.432L236.189 38.6955 209.923 196.308z" />
      </g>
    </svg>
  )
}

export default Mail

const wrapper = css`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  display: inline-block;
  &.small {
    width: 24px;
    height: 24px;
  }
`
