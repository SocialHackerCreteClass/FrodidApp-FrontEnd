import { css } from "emotion"

export const buttonCls = css`
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

  &.primary {
    background-color: var(--primary-90);
    text-decoration: none;
    color: var(--global-white);
    &:focus,
    &:hover {
      background-color: var(--primary-80);
    }
  }
  &.secondary {
    background-color: var(--secondary-70);
    text-decoration: none;
    color: var(--global-white);
    &:focus,
    &:hover {
      background-color: var(--secondary-60);
    }
  }
  &.danger {
    background-color: var(--global-error-80);
    text-decoration: none;
    color: var(--global-white);
    &:focus,
    &:hover {
      background-color: var(--global-error-70);
    }
  }

  &.ghost {
    border: 2px solid;
    padding: 10px 22px;
    background: none;
    &:hover {
      background: none;
    }
    &.small {
      padding: 4px 10px;
    }
    &.large {
      padding: 22px 46px;
    }
    &.primary {
      color: var(--primary-90);
      &:focus,
      &:hover {
        color: var(--primary-80);
      }
    }
    &.secondary {
      color: var(--secondary-70);
      &:focus,
      &:hover {
        color: var(--secondary-60);
      }
    }
    &.danger {
      color: var(--global-error-80);
      &:hover,
      &:focus {
        color: var(--global-error-70);
      }
    }
  }
`
