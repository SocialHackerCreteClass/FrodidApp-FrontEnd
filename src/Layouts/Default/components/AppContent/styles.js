import { css } from "emotion"

export const wrapper = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--global-white);
`

export const content = css`
  flex: 1;
  padding: 24px 6px;
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
