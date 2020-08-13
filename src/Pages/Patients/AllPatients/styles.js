import { css } from "emotion"

export const headerContainer = css`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  min-width: none;

  @media (max-width: 56.25em) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 24px;
  }
`
