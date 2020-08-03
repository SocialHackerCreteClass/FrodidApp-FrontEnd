import { css } from "emotion"

export const wrapper = css`
  margin-right: auto;
  margin-left: auto;
  max-width: 1860px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-10);
  padding: 0 6px;
  width: 100%;
  max-width: 426px;
  flex: 1;
  padding-top: 24px !important;
  padding-bottom: 24px !important;
  margin-bottom: 48px !important;
`

export const register = css`
  margin-bottom: 48px !important;
  text-align: center;
  font-size: 1.94rem;
  line-height: 1.35;
`

export const input = css`
  margin-bottom: 24px !important;
  color: var(--primary-90);
  font-size: 0.78rem;
  line-height: 1.44;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.75px;
`
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

export const formClass = css`
  width: 100%;
`
export const inputComponentClass = css`
  margin-top: 6px;
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
