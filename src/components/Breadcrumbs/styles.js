import { css } from "emotion"

export const wrapperCls = css`
  display: flex;
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;
  text-transform: capitalize;
`

export const itemCls = css`
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
