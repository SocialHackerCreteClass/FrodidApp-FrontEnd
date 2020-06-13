import { css } from "emotion"

export const InputCls = css`
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  display: block;
  width: 100%;
  padding: 12px;
  color: var(--global-grey-60);
  background-color: var(--global-white);
  border: 1px solid var(--global-grey-10);
  border-radius: 6px;
  margin: 0;
  transition: border-color 0.15s ease-in-out;
  font-size: 15px;
  font-size: 0.94rem;
  line-height: 1.6;
  cursor: not-allowed;
  color: var(--primary-90);
  background-color: var(--global-white);
  border-color: var(--global-grey-20);
  outline-width: 3px;
  outline-style: solid;
  outline-color: var(--primary-60);
  @media (min-width: 27.5em) {
    .c-form--search {
      display: flex;
      align-items: center;
    }
  }
  .c-form--disabled > input {
    border-color: var(--global-grey-40);
    background-color: var(--global-grey-30);
  }
  .c-form--success > input {
    border-color: var(--global-success-70);
    background-color: var(--global-success-10);
    color: var(--global-success-70);
  }
  .c-form--error > input {
    border-color: var(--global-error-70);
    background-color: var(--global-error-10);
    color: var(--global-error-70);
  }
  .c-label {
    font-size: 15px;
    font-size: 0.94rem;
    line-height: 1.6;
    color: var(--global-grey-60);
  }
  .c-label--primary {
    color: var(--primary-90);
  }
  .c-label--small {
    font-size: 12.5px;
    font-size: 0.78rem;
    line-height: 1.44;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.75px;
  }
`
