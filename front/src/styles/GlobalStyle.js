import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"

import GOTHAM_BOOK from "./fonts/GOTHAM-BOOK.woff2"
import GOTHAM_MEDIUM from "./fonts/GOTHAM-MEDIUM.woff2"
import GOTHAM_BOLD from "./fonts/GOTHAM-BOLD.woff2"
import SpoqaHanSansNeo_Regular from "./fonts/SpoqaHanSansNeo-Regular.woff2"
import SpoqaHanSansNeo_Medium from "./fonts/SpoqaHanSansNeo-Medium.woff2"
import SpoqaHanSansNeo_Bold from "./fonts/SpoqaHanSansNeo-Bold.woff2"

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'GOTHAM';
        src: local('GOTHAM_BOOK'),
        url(${GOTHAM_BOOK}) format('woff2');
        font-weight: 400;
    }

    @font-face {
        font-family: 'GOTHAM';
        src: local('GOTHAM_MEDIUM'),
        url(${GOTHAM_MEDIUM}) format('woff2');
        font-weight: 500;
    }
    
    @font-face {
        font-family: 'GOTHAM';
        src: local('GOTHAM_BOLD'),
        url(${GOTHAM_BOLD}) format('woff2');
        font-weight: 700;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: local('SpoqaHanSansNeo_Regular'),
        url(${SpoqaHanSansNeo_Regular}) format('woff2');
        font-weight: 400;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: local('SpoqaHanSansNeo_Medium'),
        url(${SpoqaHanSansNeo_Medium}) format('woff2');
        font-weight: 500;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: local('SpoqaHanSansNeo_Bold'),
        url(${SpoqaHanSansNeo_Bold}) format('woff2');
        font-weight: 700;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle
