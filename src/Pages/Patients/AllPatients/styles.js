import { css } from "emotion"

export const headerContainer = css`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const containerHalf = css`
  @media (max-width: 56.25em) {
    width: 100%;
    padding: 24px 0px;
  }
`
