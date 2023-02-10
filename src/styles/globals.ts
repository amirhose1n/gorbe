import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

const GlobalStyle = createGlobalStyle`

.layout {
    ${tw`max-w-layout w-full sm:px-12 px-6`};
    &--center {
        ${tw`mx-auto`};
    }
}
  
@font-face {font-family: "HelveticaW01-Roman"; src: url("//db.onlinewebfonts.com/t/c5bd605b45237a12c99133fa9d7cae49.eot"); src: url("//db.onlinewebfonts.com/t/c5bd605b45237a12c99133fa9d7cae49.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/c5bd605b45237a12c99133fa9d7cae49.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/c5bd605b45237a12c99133fa9d7cae49.woff") format("woff"), url("//db.onlinewebfonts.com/t/c5bd605b45237a12c99133fa9d7cae49.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/c5bd605b45237a12c99133fa9d7cae49.svg#HelveticaW01-Roman") format("svg"); }

body  {
  font-family: 'Orbitron', sans-serif;
}

html {
  scroll-behavior: smooth;
}

.spray {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

.spray-parent > span {
  overflow:visible !important;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}


@keyframes bounce {
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-50px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
}

@keyframes bounceMd {
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-20px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
}

.jump {
  transform-origin: 50% 50%;
  animation: bounce 1.5s ease alternate;
}

@media only screen and (max-width: 600px) {
  .jump {
    transform-origin: 50% 50%;
    animation: bounceMd 1.5s ease alternate;
  }
}



`;

export default GlobalStyle;
