import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    /** SCROLLBAR STYLE */
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      background: #cacaca;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #e0dede;
    }
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background: #D1D8E5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;
  }
`;
