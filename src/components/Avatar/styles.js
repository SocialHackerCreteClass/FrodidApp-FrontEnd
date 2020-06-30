import { css } from "emotion"

export const wrapper = css`
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  max-width: 100%;
  overflow: visible;
  position: relative;
  border-radius: 50%;
  background-color: var(--global-white);
  color: var(--primary-90);
  border: 2px solid;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: var(--primary-80);
  }
  &.large {
    width: 6rem;
    height: 6rem;
  }
`

export const imgWrapper = css`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const avatarImageWrapper = css`
  border: none;
`

export const avatarTextWrapper = css`
  & a {
    text-decoration: none;
  }
`

export const avatarMobile = css`
  width: 2rem;
  height: 2rem;
  @media (min-width: 33.13em) {
    & {
      width: 3rem;
      height: 3rem;
    }
  }
`

export const avatarImage = css`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const letters = css`
  font-weight: 700;
  text-transform: uppercase;
`
