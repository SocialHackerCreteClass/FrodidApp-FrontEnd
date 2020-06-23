import { css } from "emotion"

export const Wrapper = css`
  padding-right: 24px;
  padding-left: 24px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1860px;
  &:after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }
`
