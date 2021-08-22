import {Button, List, ListItemText, TextField} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import {sendMessage} from "../../store/messages";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import {messagesList} from "../../store/messages/selectors";

export const Message = ({room: roomId}) => {
    // const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    // const messageList = useSelector((state) => {
    //     console.log("update", state, roomId, state.messagesReducer.messages[roomId])
    //      return state.messagesReducer.messages[roomId] || []
    //     // return []
    // })
    const messageList = useSelector(messagesList(roomId))
    const handleSendMessage = () => {
        console.log(value)
        // setMessageList((state) => [...state, { text: value, author: "User" }]);
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
        if(messageList[messageList.length-1]?.author === "User") {
            setTimeout(() =>{
                // setMessageList((state) => [...state, { text: "Hi, User", author: "Bot" }]);
            }, 1500)
            console.log(textInput)

        }
    },[messageList])
   // console.log(useParams())
    return (<>
        <List>
            {messageList.map((message, id) => {
                    return <ListItemText primary={id + ' ' + message.text + '=' + message.author}
                                         key={id}
                                         className={message.author === 'User' ? classes.authorUser : classes.notAuthor}>
                    </ListItemText>
                })}
        </List>
        <div className={classes.chatForm}>
            <TextField id="standard-basic"
                       color="primary"

                       inputRef={textInput}
                       label="message"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}/>
            <Button color="primary" variant="outlined" onClick={() => dispatch(sendMessage(value, roomId))}>send</Button>
        </div>
        </>
    )
}