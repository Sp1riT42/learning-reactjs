import {combineReducers, createStore} from "redux";
import {profileReducer} from './profile'
import {messagesReducer} from "./messages";
import {chatsReducer} from "./chats";

export const store = createStore(
    combineReducers({
        profileReducer,
        messagesReducer,
        chatsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())