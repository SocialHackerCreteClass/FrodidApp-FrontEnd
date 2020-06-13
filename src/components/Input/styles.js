import { css } from "emotion"

export const InputCls = css`
  &.search {
    display: flex;
    align-items: center;
  }
  &.disabled > input {
    border-color: var(--global-grey-40);
    background-color: var(--global-grey-30);
  }
  &.success > input {
    border-color: var(--global-success-70);
    background-color: var(--global-success-10);
    color: var(--global-success-70);
  }
  &.errorForm > input {
    border-color: var(--global-error-70);
    background-color: var(--global-error-10);
    color: var(--global-error-70);
  }
`
