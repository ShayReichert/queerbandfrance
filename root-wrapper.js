import React from 'react'
import { createGlobalStyle } from 'styled-components'

import 'fontsource-righteous/400.css'
import 'fontsource-archivo'

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

/* RESET */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  color:  var(--main-text);
}
html {
  font-size: 62.5%;
  background: var(--second-bg);
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
  color:  var(--main-text);
}

body {
  line-height: 1;
  font-size: 1.2em;
  background: var(--main-bg);
  font-family: 'Roboto',Helvetica,sans-serif;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


/* My CSS */
:root {
  --main-text: #CDCDCD;
  --main-bg: #181a22;
  --second-bg: #030303;
}
*:focus:not(:focus-visible) {
  outline: none;
}
h1 {
  font-size: 3rem;
  @media screen and (min-width: 768px) {
    font-size: 3.4rem;
  }
}
.icon {
  font-size: 1.8rem;
}
.social-btn-box {
  margin: auto;
  width: 19rem;
  display: flex;
  justify-content: space-evenly;
  button {
    outline: none;
    height: 3.2rem;
    width: 3.3rem;
    border-radius: 30px;
    border: none;
    background: #383838;
    color: var(--main-text);
    font-size: 1.7rem;
    text-align: center;
    cursor: pointer;
    &:hover, 
    &:focus  {
      color: #fff;
    }
    svg {
      vertical-align: middle; 
      text-align: center; 
      margin: auto;
    }
  }
}

header {
  height: 15rem;
  background: var(--second-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 6rem;
    padding: 0 4.7rem;
    flex-direction: row;
    justify-content: space-between;
  }
}
.menu-active .bloc1 {
  display: block;
}
.menu-active .bloc2 {
  display: flex;
}

main {
  position: relative;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: calc(100vh - 6rem);
    margin-bottom: initial;
  }
}
.queer {
  background: #d75ee221 !important;
}
main::before {
  @media screen and (min-width: 768px) {
    content: '';
    position: absolute;
    background: rgba(114, 187, 255, 0.38);
    width: 40rem;
    height: 40rem;
    clip-path: circle(30% at  right 10%);
    top: 0;
    right: 0;
  }
}
main::after {
  @media screen and (min-width: 768px) {
    content: '';
    position: absolute;
    bottom: 0;
    left: 350px;
    width: 40rem;
    height: 40rem;
    background: rgba(235,114,255,0.21);
    clip-path: circle(50% at 0% 50%);
    transform: rotate(-90deg);
    z-index: 0;
  }
}

main #map_france path {
  fill: var(--main-text);
  stroke: var( --main-bg);
  stroke-width: 2px;
  transition: fill 100ms;
  cursor: pointer;
}
main #map_france path:hover {
  @media screen and (min-width: 768px) {
    fill: rgba(114, 187, 255, 0.58);
  }
}
main #map_france .active {
  fill: rgba(114, 187, 255, 0.78);
}

main .mentions-conditions {
  height: 80vh; 
  padding: 1rem;
  font-family: 'Archivo', Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  overflow-x: scroll;
  h1 {
    text-align: center;
  }
  h2 {
    font-size: 2.4rem;
  }
  section {
    margin: 4rem 2rem;
  }
  p {
    margin: 3rem auto;
    line-height: 25px;
  }
  li {
    line-height: 25px;
    list-style: circle;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
    padding: 3rem;
    h1 {
      font-size: 7rem;
    }
    section {
      margin: 6rem;
    }
  }
  
}

footer {
  background: var(--second-bg);
  display: grid;
  @media screen and (min-width: 768px) {
    min-height: 35rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
footer .footer-parts {
  margin: 6rem 0;
  align-self: center;
  border: 1px solid transparent;
  line-height: 35px;
  a, p {
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
    text-decoration: none;
    color: var(--main-text);
  }
  a:hover {
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    margin: initial;
    line-height: 25px;
  }
}

.cookie-container {
  bottom: 0px;
  background: #383838cf;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  left: 0px;
  position: fixed;
  width: 100%;
  z-index: 999;
}
.cookie-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 0 300px;
  margin: 15px;
}
.cookie-btn {
  font-size: 13px;
  background: #72bbff61;
  border: 0px;
  border-radius: 3px;
  box-shadow: none;
  color: #fff;
  cursor: pointer;
  flex: 0 0 auto;
  padding: 5px 10px;
  margin: 15px;
}
.cookie-btn:hover {
  background: #72bbff80;
}

/* Scroll bars
En teste, à retirer si ne fonctionne pas */
* {
  scrollbar-color: transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 1px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 20px;
}
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
