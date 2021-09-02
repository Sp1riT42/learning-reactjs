import {SEND_MESSAGE} from "./types";

export const sendMessage = (message, roomId) => ({
    type: SEND_MESSAGE,
    payload: { message, roomId },
})

export const sendMessageWithThunk = (message, roomId) => (dispatch) => {
    console.log('thunk start', message, roomId)
    dispatch(sendMessage(message, roomId))
    if(message.author === "User") {
        setTimeout(()=> {
            dispatch(
                sendMessage(
                    {author: 'Bot', message: "Hello from bot thunk"},
                    roomId)
            )
        },1000)
    }
}