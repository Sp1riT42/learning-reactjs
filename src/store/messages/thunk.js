import {db} from '../../api/firebase'
import {GET_MESSAGES} from "./types";
import {sendMessage, sendMessageWithThunk} from "./actions";

export const getMessagesFB = () => (dispatch) => {
    db.ref('messages').get().then((snapshot) => {
        const messages = {}
        console.log(snapshot)
        snapshot.forEach((snap) => {
            console.log(snap.key)
            // messages.push(snap.val())
            messages[snap.key]= [...snap.val()]
        })
        dispatch({type: GET_MESSAGES, payload: messages})
    })
}

export const addNewMessage = (roomId, messageValue) => (dispatch) => {
    //const newLink = db.ref('messages').child(roomId).push()

    db.ref('messages').get().then((snapshot) => {
        const messages = {}
        console.log(snapshot)
        snapshot.forEach((snap) => {
            console.log(snap.key)
            // messages.push(snap.val())
            messages[snap.key]= [...snap.val()]
        })
        console.log('messages[roomId]: ',messages[roomId])
        if(messages[roomId] === undefined) {
            messages[roomId] = []
        }
        messages[roomId].push({text: messageValue.message, id: new Date(), author: messageValue.author})
        console.log(messages[roomId])
        db
            .ref("messages")
            .update(messages).then(() => {
            //dispatch(sendMessageWithThunk(messageValue, roomId))
            dispatch(sendMessage(messageValue, roomId))
            if(messageValue.author === "User") {
                setTimeout(()=> {
                    messages[roomId].push({text: "Hello from bot thunk", id: new Date(), author: 'Bot'})
                    console.log(messages[roomId])
                    db
                        .ref("messages")
                        .update(messages).then(() => {
                        dispatch(
                            sendMessage(
                                {author: 'Bot', message: "Hello from bot thunk"},
                                roomId)
                        )
                    })

                },1000)
            }
        })
    })

}