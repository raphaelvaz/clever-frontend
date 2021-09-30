import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #E5E5E5;
    --asideText: #ffffff;
    --textHeading: #27272E;
    --textBody: #425466;
    --textInput: #32323C;
    --textPlaceholder:rgba(50, 50, 60, 0.5);
    --PrimaryColor:#3962FC;
    --ButtonPaginationBackgroundColor: #E1E8FF;
    --ButtonPaginationColor:#4C6FFF;
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
}

button{
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}
`;