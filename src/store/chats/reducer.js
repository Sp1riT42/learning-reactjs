import {CREATE_CHAT, DELETE_CHAT} from "./types";

const initialCheckbox = {
    chats: [
        {name: "Game", id: "1"},
        {name: "Life", id: "2"},
        {name: "CodeWars", id: "3"}
    ],
    maxId: 3
}

export const chatsReducer = (state = initialCheckbox, action) => {
    console.log(state, action)
    switch (action.type) {
        case CREATE_CHAT:
            console.log(action.payload, state)
            action.payload.id = ++state.maxId
           // action.payload.id = String(action.payload.id)
            console.log(action.payload, state)
            return { ...state,
                chats: [...state.chats, action.payload],
                // stateCheckbox: !state.stateCheckbox
            }
        case DELETE_CHAT:
            console.log("action.payload:" + action.payload)
            console.log([...state.chats.filter(item => {
                return item.name !== action.payload
            })])
            return {
                ...state,
                chats: [...state.chats.filter(item => {
                return item.name !== action.payload
            })]}
        default:
            return state
    }
}