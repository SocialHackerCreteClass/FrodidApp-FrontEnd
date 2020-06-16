import { css } from "emotion"

export const badgeCls = css`
  display: inline-block;
  padding: 6px;
  font-size: 0.78rem;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: var(--global-grey-70);
  color: var(--global-white);
  border: 1px solid;
  &.active {
    background-color: var(--global-success-10);
    color: var(--global-success-70);
  }
`
