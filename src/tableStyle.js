import { css } from "emotion"

export const tr = css`
  display: grid;
  align-items: center;
  padding: 24px 6px;
  margin-bottom: 12px;
  border-radius: 6px;
  grid-template-columns: 2fr 1fr;
  &:first-child: {
    background: var(--primary-10);
  }
  @media (min-width: 46.25em) {
    & {
      grid-template-columns: rpeat(2, 4fr) 3fr;
    }
    @media (min-width: 75em) {
      & {
        grid-template-columns: repeat(2, 4fr) 3fr 2fr;
      }
    }
  }
`

export const th = css`
  background: var(--primary-10);
  font-size: 15px;
  font-size: 0.94rem;
  line-height: 1.6;
  text-color: var(--global-grey-90);
  ${``}
`
