import { css } from "emotion"
import backgroundImg from "../../images/background.svg"

export const wrapper = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-10);

  @media (min-width: 46.25em) {
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: bottom;
  }
`
export const gridNarrow = css`
  padding: 0 6px;
  width: 100%;
  max-width: 426px;
  flex: 1;
`
export const gridWide = css`
  width: 100%;
  max-width: 1392px;
`
