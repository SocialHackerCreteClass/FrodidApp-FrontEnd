import { css } from "emotion"

export const breadcrumbsCls = css`
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  color: var(--primary-60);
  display: inline;
  li {
    display: inline;
    list-style-type: none;
    margin-left: 0;
  }
  li:before {
    content: "/";
    padding-right: 3px;
  }
  li:first-child:before {
    content: "";
    padding-right: 0;
  }
`
