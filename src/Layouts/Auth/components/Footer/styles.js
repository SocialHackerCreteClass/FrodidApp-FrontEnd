import { css } from "emotion"

export const wrapper = css`
  background-color: var(--primary-90);
  color: var(--global-white);
  padding: 24px 6px;

  @media (min-width: 46.25em) {
    background-color: unset;
    padding: 24px 12px;
  }
`
