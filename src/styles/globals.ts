import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.layout {
    ${tw`max-w-layout w-full`};
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
    
`;

export default GlobalStyle;
