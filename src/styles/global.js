import { createGlobalStyle } from 'styled-components';

export const Theme = {
  white: '#F5FDFF',
  black: '#3A3F4E',
  accentBright: '#7755F0',
  accentSub: '#ADA9E1',
  accentAlt: '#5dddb5',

  borderWidth: 5, //px
  containerPadding: 1.2, //rem
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0 !important;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    color: ${props => props.theme.black};
  }

  h1 {
    font-family: 'Fira Code', monospace;
    font-weight: 400;
    color: ${props => props.theme.accentBright};
    margin-bottom: 2.2rem;
  }

  h2 {
    font-family: 'Fira Code', monospace;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.4rem;
    margin-bottom: .4rem;
  }

  a, a:hover, a:visited {
    text-decoration: none;
    font-family: 'Fira Code', monospace;
    color: ${props => props.theme.accentBright};
  }

  ul {
    list-style-type: none;
    margin: 0;
  }
`;

export default GlobalStyle;
