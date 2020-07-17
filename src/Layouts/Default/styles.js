import { css } from "emotion"

export const wrapper = css`
  display: grid;
  grid-template-columns: 48px auto;
  @media (min-width: 33.13em) {
    grid-template-columns: 84px auto;
  }
  @media (min-width: 53.75em) {
    grid-template-columns: 120px auto;
  }
  @media (min-width: 61.25em) {
    grid-template-columns: 288px auto;
  }
`
