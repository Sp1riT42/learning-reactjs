import {Button, List, ListItemText, TextField} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import { sendMessage, sendMessageWithThunk} from "../../store/messages";
import {makeStyles} from "@material-ui/core/styles";
import {messagesList} from "../../store/messages/selectors";
import {MessageField} from "./message-field/message-field";
import {addNewMessage, getMessagesFB} from "../../store/messages/thunk";

export const Message = ({room: roomId}) => {
    const [value, setValue] = useState("");
    const messageList = useSelector(messagesList(roomId))
    const handleSendMessage = () => {
        console.log(value)
        setValue("");
    };
    const dispatch = useDispatch()
    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.customTheme.color
        },
        authorUser: {
            textAlign: "right"
        },
        notAuthor: {
            textAlign: "left"
        },
        textId: {
            color: theme.customTheme.color,
            textAlign: "right"
        },
        leftMenu: {
            borderRight: '1px solid #c4c4c4',
            height: '100vh'
        },
        rightMenu: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        chatForm: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px'
        }
    }));
    const textInput = useRef(null);
    const classes = useStyles()
    useEffect(() => {
        textInput.current.focus()
        // if(messageList[messageList.length-1]?.author === "User") {
        //     setTimeout(() =>{
        //         // setMessageList((state) => [...state, { text: "Hi, User", author: "Bot" }]);
        //     }, 1500)
        //     console.log(textInput)
        //
        // }
    },[messageList])
    useEffect(() => {
        dispatch(getMessagesFB())
        console.log(messageList)
    },[dispatch])
   // console.log(useParams())
    return <>
        <MessageField messages={messageList} classes={classes}/>
        <div className={classes.chatForm}>
            <TextField id="standard-basic"
                       color="primary"

                       inputRef={textInput}
                       label="message"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}/>
            <Button color="primary"
                    variant="outlined"
                    onClick={() => dispatch(sendMessageWithThunk({message: value, author: "User"}, roomId))}
            >
                send
            </Button>
            <Button color="primary"
                    variant="outlined"
                    onClick={() => dispatch(addNewMessage(roomId,{message: value, author: "User"}))}
            >
                sendFB
            </Button>
        </div>
    </>

}