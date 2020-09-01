import { css } from "emotion"

export const tr = css`
  align-items: center;
  padding: 24px 6px;
  background-color: white;
`

export const trCell = css`
  &:last-child {
    text-align: right;
  }
`

export const thCell = css`
  &:last-child {
    text-align: right;
  }
`

export const th = css`
  background-color: var(--primary-10);
  // var(--primary-10); that's the original background color for table head
  align-items: center;
  padding: 24px 6px;
  margin-bottom: 12px;
  border-radius: 6px;
  font-size: 0.94rem;
  line-height: 1.6;
`
export const tableStyle = css`
  list-style: none;
  padding: 0;
  margin-bottom: 48px;
`
export const pagination = css`
  display: flex;
  list-style: none;
  margin: 0;
  & :first-child {
    margin-left: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  & :last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

export const pageBut = css`
  text-decoration: none;
  position: relative;
  display: block;
  padding: 6px 12px;
  border: 1px solid;
  margin-left: -1px;
  color: var(--primary-90);
  &:hover {
    color: var(--global-white);
    background-color: var(--primary-80);
    border-color: var(--primary-80);
    cursor: pointer;
  }
`
export const activeBut = css`
  color: var(--global-white);
  background-color: var(--primary-90);
  border-color: var(--primary-90);
`

export const noActiveBut = css`
  color: var(--global-grey-60);
  pointer-events: none;
`

export const orderingPagination = css`
  @media (min-width: 46.25em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
