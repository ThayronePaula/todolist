import React from "react";

import GlobalStyle from "../src/styles/global";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    console.log(theme);
    
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello</h1>
        <button onClick={toggleTheme}>Toggle</button>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
