import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {firebaseApp} from "./api/firebase";
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {orange} from "@material-ui/core/colors";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Profile} from "./components/profile";
import {Provider} from "react-redux";
import {store, persistore} from './store'
import {PersistGate} from "redux-persist/integration/react";
import {Gists} from "./components/gists";
import {Login} from "./components/authorization/login";
import {SignUp} from "./components/authorization/sign-up";
import {PublicRoute, PrivateRoute} from "./components/route";


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

const Init = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                setSession(user)
            } else {
                setSession(null)
            }
        })
    }, [])

    const signOut = () => {
        firebaseApp.auth().signOut()
    }
    return (
        <React.StrictMode>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistore}>
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <div>
                                <Link to="/chats">chats</Link>
                            </div>
                            <div>
                                <Link to="/profile">profile</Link>
                            </div>
                            <div>
                                <Link to="/gists">gists</Link>
                            </div>
                            <div>
                                <Link to="/login">Login</Link>
                            </div>
                            <div>
                                <Link to="/sign-up">Регистрация</Link>
                            </div>
                            {session?.email && (
                            <div onClick={signOut}>
                                Выход {session.email}
                            </div>
                            )}
                            <Switch>
                                <PrivateRoute isAut={session} path="/profile">
                                    <Profile></Profile>
                                </PrivateRoute>
                                <PrivateRoute isAut={session} path="/chats">
                                    <App />
                                </PrivateRoute>
                                <PrivateRoute isAut={session} path="/gists">
                                    <Gists/>
                                </PrivateRoute>
                                <PublicRoute isAut={session} path="/login">
                                    <Login></Login>
                                </PublicRoute>
                                <PublicRoute isAut={session} path="/sign-up">
                                    <SignUp></SignUp>
                                </PublicRoute>
                                <Route path="*">
                                    <h1>404 page</h1>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    );
}


ReactDOM.render(<Init/>, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
