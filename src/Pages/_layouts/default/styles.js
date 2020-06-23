import { css } from "emotion"

export const Wrapper = css`
  padding-right: 24px;
  padding-left: 24px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1860px;
  padding-left: 0 !important;
  padding-right: 0 !important;

  &:after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }
`
