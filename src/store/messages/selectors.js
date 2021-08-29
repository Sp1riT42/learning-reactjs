export function messagesList (roomId) {
    // console.log("update", state, roomId, state.messagesReducer.messages[roomId])
    return (state) => state.messagesReducer.messages[roomId] || []
}