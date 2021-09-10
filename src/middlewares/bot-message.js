// import {sendMessage} from "../store/messages";
// import {SEND_MESSAGE} from "../store/messages/types";
//
// export const botSendMessage = (store) => (next) => (action) => {
//     if(action.type === SEND_MESSAGE && action.payload.message.author === "User") {
//         setTimeout(()=> {
//             store.dispatch(
//                 sendMessage(
//                     {author: 'Bot', message: "Hello from bot thunk"},
//                     action.payload.roomId)
//             )
//         },1000)
//     }
//
//     return next(action)
// }