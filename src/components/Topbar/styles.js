import { css } from "emotion"

export const wrapper = css`
  padding: 24px 6px;
  border-bottom: 1px solid var(--primary-10);
  background-color: var(--global-white);
  @media (min-width: 46.25em) {
    padding: 24px 12px;
  }
  @media (min-width: 61.25em) {
    padding: 24px;
  }
  @media (min-width: 81.25em) {
    padding: 24px 48px;
  }
`

export const alignItems = css`
  align-items: center;
`
