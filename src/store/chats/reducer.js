import {CREATE_CHAT, DELETE_CHAT, GET_CHATS} from "./types";

const initialCheckbox = {
    chats: [
        // {name: "Game", id: "1"},
        // {name: "Life", id: "2"},
        // {name: "CodeWars", id: "3"}
    ],
    maxId: 3
}

export const chatsReducer = (state = initialCheckbox, action) => {
    console.log(state, action)
    switch (action.type) {
        case CREATE_CHAT:
            const id = state.maxId + 1
            const item = {name: action.payload.name, id}
            return { ...state,
                chats: [...state.chats, item],
                maxId: id
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
        case GET_CHATS:
            return { ...state,
                chats: action.payload,
            }
        default:
            return state
    }
}