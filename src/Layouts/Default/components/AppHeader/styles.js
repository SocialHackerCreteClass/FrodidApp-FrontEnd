import { css } from "emotion"

export const wrapper = css`
  background-color: var(--primary-10);
  display: flex;
  flex-direction: column;
`

const navLink = css`
  display: block;
  text-decoration: none;
  font-size: 0.94rem;
  line-height: 1.6;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 700;
  &:hover {
    border-right: 6px solid;
  }
`

export const activeLink = css`
  background-color: var(--primary-20);
  border-left-color: var(--primary-30);
  border-bottom-color: var(--primary-30);
  border-right: 6px solid;
  border-right-color: var(--primary-30);
  border-top-color: var(--primary-30);
`

export const navLinkPrimary = css`
  ${navLink};
  color: var(--primary-90);
  &:hover {
    ${activeLink};
  }
`

export const navLinkSecondary = css`
  ${navLink};
  color: var(--secondary-80);
  &:hover {
    background-color: var(--secondary-20);
    border-left-color: var(--secondary-30);
    border-bottom-color: var(--secondary-30);
    border-right: 6px solid;
    border-right-color: var(--secondary-30);
    border-top-color: var(--secondary-30);
  }
`

export const navIcon = css`
  transition: transform 0.15s ease-in-out;
  .${navLinkPrimary}:hover &,
  .${navLinkSecondary}:hover & {
    transform: translateX(-6px);
  }
`

export const localeCls = css`
  margin-top: auto;
  margin-bottom: 20px;
`
