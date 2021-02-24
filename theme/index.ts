/// <reference types="styled-components/cssprop" />

import { config, dom } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css" // Import the CSS
import { createGlobalStyle, DefaultTheme } from "styled-components"

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export const GlobalStyle = createGlobalStyle`
  ${dom.css()}

  :root{
    --yellow:#f5f749;
    --red:#fb3c20;
    --green: #00a82d;
    --navWidth: 60px;

    --white89: rgba(255,255,255,.89);
    --white55: rgba(255,255,255,.55);
    --white34: rgba(255,255,255,.34);
    --white21: rgba(255,255,255,.21);
    --white13: rgba(255,255,255,.13);
    --white08: rgba(255,255,255,.08);

    --black89:  rgba(0,0,0,.89);
    --black55: rgba(0,0,0,.55);
    --black34: rgba(0,0,0,.34);
    --black21: rgba(0,0,0,.21);
    --black13: rgba(0,0,0,.13);
    --black08: rgba(0,0,0,.08);

    --headerColor: #e6e6e6;
    --descriptionColor: #a2a2a2;
    --dColor: #737373;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #000000;
    font-family: 'Mukta', sans-serif;
  }

  a{
    text-decoration: none;
    color: #edf1f7;
  }

  img{
    position:relative;
    width:100%;
    height:100%;
  }

  @media(max-width: 768px){
   .hide{
       width: 0px !important;
     & > * {
       display: none;
     }
   }

  }
  @media(min-width: 768px){
  :root{
    --navWidth: 240px;
  }
}

`

export const theme: DefaultTheme = {
  borderRadius: "5px",
  palette: {
    primary: {
      main: "#00f",
      contrastText: "",
    },
    secondary: {
      main: "",
      contrastText: "",
    },
  },
}
