import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        box-sizing:  border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }
`