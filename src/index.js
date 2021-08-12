import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {orange} from "@material-ui/core/colors";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Profile} from "./components/profile";
const theme = createTheme({
    customTheme: {
        color: orange[500]
    },
    palette: {
        secondary: {
            main: orange[500],
        },
        primary: {
            main: orange[500]
        }
    },
});
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <div>
              <Link to="/chats">chats</Link>
          </div>
          <div>
              <Link to="/profile">profile</Link>
          </div>
          <Switch>
              <Route path="/profile">
                  <Profile></Profile>
              </Route>
              <Route path="/chats">
                  <ThemeProvider theme={theme}>
                      <App />
                  </ThemeProvider>
              </Route>
              <Route path="*">
                  <h1>404 page</h1>
              </Route>
          </Switch>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
