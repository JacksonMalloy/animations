import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import GothamBlackEOT from '../fonts/gotham-black-webfont.eot'
import GothamBlackWOFF2 from '../fonts/gotham-black-webfont.woff2'
import GothamBlackWOFF from '../fonts/gotham-black-webfont.woff'
import GothamBlackTTF from '../fonts/gotham-black-webfont.ttf'
import GothamBlackSVG from '../fonts/gotham-black-webfont.svg'

import GothamLightEOT from '../fonts/gotham-light-webfont.eot'
import GothamLightWOFF2 from '../fonts/gotham-light-webfont.woff2'
import GothamLightWOFF from '../fonts/gotham-light-webfont.woff'
import GothamLightTTF from '../fonts/gotham-light-webfont.ttf'
import GothamLightSVG from '../fonts/gotham-light-webfont.svg'

import GothamMediumEOT from '../fonts/gotham-medium-webfont.eot'
import GothamMediumWOFF2 from '../fonts/gotham-medium-webfont.woff2'
import GothamMediumWOFF from '../fonts/gotham-medium-webfont.woff'
import GothamMediumTTF from '../fonts/gotham-medium-webfont.ttf'
import GothamMediumSVG from '../fonts/gotham-medium-webfont.svg'

import GothamUltraEOT from '../fonts/gotham-ultra-webfont.eot'
import GothamUltraWOFF2 from '../fonts/gotham-ultra-webfont.woff2'
import GothamUltraWOFF from '../fonts/gotham-ultra-webfont.woff'
import GothamUltraTTF from '../fonts/gotham-ultra-webfont.ttf'
import GothamUltraSVG from '../fonts/gotham-ultra-webfont.svg'

import MerlodNormeBlackTTF from '../fonts/MerlodNorme-Black.ttf'
import MerlodNormeBlackOTF from '../fonts/MerlodNorme-Black.otf'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Gotham Black";
    src: url("${GothamBlackEOT}");
    src: url("${GothamBlackEOT}?#iefix") format("embedded-opentype"),
        url("${GothamBlackWOFF2}") format("woff2"),
        url("${GothamBlackWOFF}") format("woff"),
        url("${GothamBlackTTF}") format("truetype"),
        url("${GothamBlackSVG}#Gotham Black") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham Light";
    src: url("${GothamLightEOT}");
    src: url("${GothamLightEOT}?#iefix") format("embedded-opentype"),
        url("${GothamLightWOFF2}") format("woff2"),
        url("${GothamLightWOFF}") format("woff"),
        url("${GothamLightTTF}") format("truetype"),
        url("${GothamLightSVG}#Gotham Light") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham Medium";
    src: url("${GothamMediumEOT}");
    src: url("${GothamMediumEOT}?#iefix") format("embedded-opentype"),
        url("${GothamMediumWOFF2}") format("woff2"),
        url("${GothamMediumWOFF}") format("woff"),
        url("${GothamMediumTTF}") format("truetype"),
        url("${GothamMediumSVG}#Gotham Medium") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham Ultra";
    src: url("${GothamUltraEOT}");
    src: url("${GothamUltraEOT}?#iefix") format("embedded-opentype"),
        url("${GothamUltraWOFF2}") format("woff2"),
        url("${GothamUltraWOFF}") format("woff"),
        url("${GothamUltraTTF}") format("truetype"),
        url("${GothamUltraSVG}#Gotham Ultra") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Merlod Norme";
    src: url("${MerlodNormeBlackOTF}");
    src: url("${MerlodNormeBlackOTF}") format("opentype"),
        url("${MerlodNormeBlackTTF}") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-size: 15px;
  }
`
