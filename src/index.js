import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {orange} from "@material-ui/core/colors";
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
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
