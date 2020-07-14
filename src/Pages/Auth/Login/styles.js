import { css } from "emotion"

export const form = css`
  //type css here
`

export const input = css`
  &.active {
    color: var(--global-grey-60);
  }

  & + & {
    padding-left: 12px;
    &:before {
      display: inline-block;
      padding-right: 6px;
      color: var(--global-grey-60);
      content: "\\203A";
    }
  }
`
