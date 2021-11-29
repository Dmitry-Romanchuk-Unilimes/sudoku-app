import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "reportWebVitals";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/index";
import { Card, Content, Grid, Title } from "components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>
        <Title>Sudoku</Title>
        <Card>
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
