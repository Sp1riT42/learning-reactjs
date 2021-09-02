import {CREATE_CHAT, DELETE_CHAT} from "./types";


export const createChat = (nameChat) => ({type: CREATE_CHAT, payload: {name: nameChat}})
export const deleteChat = (chatId) => ({type: DELETE_CHAT, payload: chatId})