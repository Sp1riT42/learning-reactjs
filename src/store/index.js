import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {profileReducer} from './profile'
import {messagesReducer} from "./messages";
import {chatsReducer} from "./chats";
import {gistsReducer} from "./gists";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['messagesReducer', 'chatsReducer']
}

export const reducer = combineReducers({
    profileReducer,
    messagesReducer,
    chatsReducer,
    gistsReducer,
})

const persistreducer = persistReducer(persistConfig, reducer)

export const store = createStore(
    persistreducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args
    )
    )

export const persistore = persistStore(store)