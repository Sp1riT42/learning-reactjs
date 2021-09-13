import {db} from '../../api/firebase'
import {GET_CHATS} from "./types";

export const getChatsFB = () => (dispatch) => {
    db.ref('chats').get().then((snapshot) => {
        const chats = []

        snapshot.forEach((snap) => {
            chats.push(snap.val())
        })
        dispatch({type: GET_CHATS, payload: chats})
    })
}