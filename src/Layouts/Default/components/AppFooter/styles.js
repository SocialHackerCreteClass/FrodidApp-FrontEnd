import { css } from "emotion"

export const wrapper = css`
  padding: 24px 6px;
  background-color: var(--primary-90);
  color: var(--global-white);
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
