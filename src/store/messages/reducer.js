import {GET_MESSAGES, SEND_MESSAGE} from "./types"

const initialState = {
    messages: {
        room1: [{ id: new Date(), author: "Bot", text: "Hello from store 1" }],
        Life: [{ id: new Date(), author: "Bot", text: "Hello from store 2" }],
        CodeWars: [{ id: new Date(), author: "Bot", text: "Hello from store 3" }],
    },
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            console.log(action.payload, state.messages)
            console.log(state.messages[action.payload.roomId])
            // if(state.messages[action.payload.roomId] === undefined) {
            //     state = {...state,
            //     messages: {
            //         ...state.messages,
            //         [action.payload.roomId]: [{
            //             id: new Date(),
            //             author: "Bot",
            //             text: `Hello from store 3 ${action.payload.roomId}`
            //         }]
            //     }
            //     }
            // }
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.roomId]: [
                        ...(state.messages[action.payload.roomId] || [
                            {
                                id: new Date(),
                                author: "Bot",
                                text: `Hello from store 3 ${action.payload.roomId}`
                            }
                        ]),
                        { text: action.payload.message.message, id: new Date(), author: action.payload.message.author },
                    ],
                },
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state
    }
}