import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "reportWebVitals";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/index";
import { Card, Content, Grid, Title, Numbers, NewButton } from "components";
import { configureStore } from "core";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Content>
            <Title>Sudoku</Title>
            <Card>
              <NewButton />
              <Grid />
              <Numbers />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
