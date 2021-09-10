export function messagesList (roomId) {
     console.log("update messages list")
    return (state) => state.messagesReducer.messages[roomId] || []
}