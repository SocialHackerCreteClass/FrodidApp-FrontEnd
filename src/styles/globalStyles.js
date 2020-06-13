import { injectGlobal } from "emotion"
import nunitoRegularTTF from "./fonts/nunito/nunito-regular.ttf"
import nunitoRegularWOFF from "./fonts/nunito/nunito-regular.woff"
import nunitoRegularWOFF2 from "./fonts/nunito/nunito-regular.woff2"
import nunitoBoldTTF from "./fonts/nunito/nunito-bold.ttf"
import nunitoBoldWOFF from "./fonts/nunito/nunito-bold.woff"
import nunitoBoldWOFF2 from "./fonts/nunito/nunito-bold.woff2"

injectGlobal`@charset "UTF-8";
html {
  box-sizing: border-box;
}
*,
:after,
:before {
  box-sizing: inherit;
}
html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
footer,
header,
nav,
section {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
button,
input {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button {
  text-transform: none;
}
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
body,
dd,
dl,
h1,
h2,
h3,
ol,
p,
ul {
  margin: 0;
  padding: 0;
}
dl,
h1,
h2,
h3,
ol,
p,
ul {
  margin-bottom: 24px;
}
dd,
ol,
ul {
  margin-left: 24px;
}
html {
  --primary-10: #f0f5fc;
  --primary-20: #cfe0fc;
  --primary-30: #accbfc;
  --primary-40: #84b1fa;
  --primary-50: #5691f0;
  --primary-60: #3272d9;
  --primary-70: #1d5bbf;
  --primary-80: #114599;
  --primary-90: #103570;
  --primary-100: #15233b;
  --secondary-10: #faf0f4;
  --secondary-20: #fad4e4;
  --secondary-30: #fab4d1;
  --secondary-40: #f78bb8;
  --secondary-50: #ed5393;
  --secondary-60: #d6246e;
  --secondary-70: #b01355;
  --secondary-80: #8a1244;
  --secondary-90: #611535;
  --secondary-100: #421527;
  --global-grey-10: #f5f7fa;
  --global-grey-20: #ebeff5;
  --global-grey-30: #dde3ed;
  --global-grey-40: #c8d1e0;
  --global-grey-50: #afbacc;
  --global-grey-60: #8e99ab;
  --global-grey-70: #707a8a;
  --global-grey-80: #58606e;
  --global-grey-90: #434a54;
  --global-grey-100: #333840;
  --global-success-10: #e1faeb;
  --global-success-70: #056b2e;
  --global-error-10: #faf0f0;
  --global-error-70: #b80d0d;
  --global-error-80: #8f0e0e;
  --global-white: #fff;
  --global-broken-white: #fdfdfd;
  font-size: 1em;
  line-height: 1.5;
  overflow-y: scroll;
  min-height: 100%;
}
@font-face {
  font-family: Nunito;
  font-style: normal;
  font-weight: 400;
  src: local("Nunito Regular"), local("Nunito-Regular"),
    url(${nunitoRegularWOFF2}) format("woff2"),
    url(${nunitoRegularWOFF}) format("woff"),
    url(${nunitoRegularTTF}) format("truetype");
}
@font-face {
  font-family: Nunito;
  font-style: normal;
  font-weight: 700;
  src: local("Nunito Bold"), local("Nunito-Bold"),
    url(${nunitoBoldWOFF2}) format("woff2"),
    url(${nunitoBoldWOFF}) format("woff"),
    url(${nunitoBoldTTF}) format("truetype");
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-family: Nunito, sans-serif;
  font-size: 1.13rem;
  line-height: 1.33;
  background-color: var(--primary-10);
  color: var(--primary-90);
}
body,
h1,
h2,
h3 {
  font-weight: 400;
}
h1 {
  font-size: 4.84rem;
  line-height: 1.09;
}
h2 {
  font-size: 4.03rem;
}
h2,
h3 {
  line-height: 1.12;
}
h3 {
  font-size: 3.36rem;
}
img {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}
input {
  display: block;
  width: 100%;
  padding: 12px;
  color: var(--global-grey-60);
  background-color: var(--global-white);
  border: 1px solid var(--global-grey-10);
  border-radius: 6px;
  margin: 0;
  transition: border-color 0.15s ease-in-out;
  font-size: 15px;
  font-size: 0.94rem;
  line-height: 1.6;
}
input[disabled] {
  cursor: not-allowed;
}
input:focus {
  color: var(--primary-90);
  background-color: var(--global-white);
  border-color: var(--global-grey-20);
  outline-width: 3px;
  outline-style: solid;
  outline-color: var(--primary-60);
}
`
