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
  background: var(--main-bg);
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
h1 {
  font-size: 3.4rem;
}
.icon {
  font-size: 1.8rem;
}
header {
  height: 6rem;
  background: var(--second-bg);
  display: flex;
  justify-content: space-between;
  padding: 0 4.7rem;
}
main {
  position: relative;
  width: 100vw;
  height: calc(100vh - 6rem);
}
main::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40rem;
    height: 40rem;
    background: rgba(114, 187, 255, 0.38);
    clip-path: circle(30% at  right 10%);
  }
main::after {
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

#map_france path {
  fill: var(--main-text);
  stroke: var( --main-bg);
  stroke-width: 2px;
  transition: fill 100ms;
  cursor: pointer;
}
#map_france path:hover {
  fill: rgba(114, 187, 255, 0.78);
}
#map_france .active {
  fill: rgba(114, 187, 255, 0.58);
}

footer {
  width: 100vw;
  height: 200px;
  background: var(--second-bg);
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
