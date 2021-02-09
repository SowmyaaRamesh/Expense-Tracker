import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background : ${({ theme }) => theme.body};
     color : ${({ theme }) => theme.text};
     transition: all .5s linear;
} 
.btn{
    background : ${({ theme }) => theme.button};
    transition: all .5s ease-in;
}
`;

export const lightTheme = {
  body: "#e3d0b9",
  text: "#000",
  button: "#9c88ff",
};

export const darkTheme = {
  body: "#313131",
  text: "#fff",
  button: "#ca3e47",
};
