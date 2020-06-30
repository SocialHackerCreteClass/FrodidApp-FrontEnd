import { css } from "emotion"

export const wrapper = css`
  display: inline-block;
  vertical-align: middle;
  font: inherit;
  text-align: center;
  margin: 0;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.15s ease-in-out;
  border-radius: 6px;
  &.full {
    width: 100%;
  }
  &.small {
    padding: 6px 12px;
  }
  &.large {
    padding: 24px 48px;
  }
`
export const primaryBtn = css`
  background-color: var(--primary-90);
  ext-decoration: none;
  color: var(--global-white);
  &:active {
    text-decoration: none;
    color: var(--global-white);
  }
  &:focus {
    text-decoration: none;
    color: var(--global-white);
    background-color: var(--primary-80);
  }
  &:hover {
    text-decoration: none;
    color: var(--global-white);
    background-color: var(--primary-80);
  }
`
export const secondaryBtn = css`
  background-color: var(--secondary-70);
  text-decoration: none;
  color: var(--global-white);
  &:active {
    text-decoration: none;
    color: var(--global-white);
  }
  &:focus {
    text-decoration: none;
    color: var(--global-white);
    background-color: var(--secondary-60);
  }
  &:hover {
    ttext-decoration: none;
    color: var(--global-white);
    background-color: var(--secondary-60);
  }
`
export const dangerBtn = css`
  background-color: var(--global-error-80);
  text-decoration: none;
  color: var(--global-white);
  &:active {
    text-decoration: none;
    color: var(--global-white);
  }
  &:focus {
    text-decoration: none;
    color: var(--global-white);
    background-color: var(--global-error-70);
  }
  &:hover {
    text-decoration: none;
    color: var(--global-white);
    background-color: var(--global-error-70);
  }
`
export const ghostBtn = css`
  border: 2px solid;
  padding: 10px 22px;
  background: none;
  &:active {
    background: none;
  }
  &:focus {
    background: none;
  }
  &:hover {
    background: none;
  }
  &.small {
    padding: 4px 10px;
  }
  &.primary {
    color: var(--primary-90);
  }
`
