import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "reportWebVitals";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/index";
import { Card, Content, Grid, Title } from "components";
import { configureStore } from "core";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content>
          <Title>Sudoku</Title>
          <Card>
            <Grid />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
