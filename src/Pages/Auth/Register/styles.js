import { css } from "emotion"

export const emailInput = css`
  margin-bottom: 24px !important;
  color: var(--primary-90);
  font-size: 0.78rem;
  line-height: 1.44;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.75px;
  input {
    border-color: var(--global-success-70);
    background-color: var(--global-success-10);
    color: var(--global-success-70);
  }
`

export const submitBtn = css`
  margin-bottom: 24px !important;
  font: inherit;
  text-align: center;
  margin: 0;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  border-radius: 6px;
  width: 100%;
  background-color: var(--secondary-70);
  color: var(--global-white);
  margin-top: 48px;
`

// I was unable to add margin bottom to the labels of each input, so I added margin top on the input itself.
export const inputWrapper = css`
  margin-top: 6px !important;
`
