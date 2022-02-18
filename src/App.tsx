import { ThemeProvider } from "styled-components";
import { Provider } from 'mobx-react';

import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider {...store}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
