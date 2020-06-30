import { css } from "emotion"

export const inputCls = css`
  display: block;
  width: 100%;
  padding: 12px;
  color: var(--global-grey-60);
  background-color: var(--global-white);
  border: 1px solid var(--global-grey-10);
  border-radius: 6px;
  margin: 0;
  transition: border-color 0.15s ease-in-out;
  font-size: 0.94rem;
  line-height: 1.6;
  &[disabled] {
    cursor: not-allowed;
    border-color: var(--global-grey-40);
    background-color: var(--global-grey-30);
  }
  &:focus {
    color: var(--primary-90);
    background-color: var(--global-white);
    border-color: var(--global-grey-20);
    outline: var(--primary-60) solid 3px;
  }
  &.search {
    display: flex;
    align-items: center;
  }
  &.success {
    border-color: var(--global-success-70);
    background-color: var(--global-success-10);
    color: var(--global-success-70);
  }
  &.errorForm {
    border-color: var(--global-error-70);
    background-color: var(--global-error-10);
    color: var(--global-error-70);
  }
`
