// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";
// import SearchProvider from "./context/SearchContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#26a69a',
      contrastText:'#fafafa'
      // error:,
      // warning:,
      // info:,
      // success:,
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
      secondary:'#26a69a',
      // error:,
    },
  },
});




function Root() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
