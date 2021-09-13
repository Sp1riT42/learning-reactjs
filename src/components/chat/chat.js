import {useEffect, useState} from "react";
import {IconButton, List, ListItem, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteChat} from "../../store/chats";
import {getChatsFB} from "../../store/chats/thunk";

export const Chat = ({selectChat, chatID}) => {
    // const [chatList, setChatList] = useState([
    //     {name: "Game", id: "1"},
    //     {name: "Life", id: "2"},
    //     {name: "CodeWars", id: "3"}
    // ])
    const chatList = useSelector((state) => {
        console.log(state.chatsReducer, state.chatsReducer.chats)
        return state.chatsReducer.chats || []
    })
    // const [selectedChat, setSelectedChat] = useState(chatList[0].name || false);
    // const handleListItemClick = (event, name) => {
    //
    //     setSelectedChat(name);
    //     console.log(chatId, selectChat)
    // };
    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.customTheme.color
        },
        textId: {
            color: theme.customTheme.color,
            textAlign: "right"
        },
        chatForm: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px'
        }
    }));
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getChatsFB())
    }, [dispatch])
    return (
        <List component="nav" aria-label="main mailbox folders">
            {chatList.map(chat => (
                <ListItem button
                          key={chat.id}
                          selected={chatID === chat.name}
                          >
                    <Link to={`/chats/`+chat.name} onClick={() => {selectChat(chat.name)}}>
                        <ListItemText className={classes.root} primary={chat.name}></ListItemText>
                        <ListItemText className={classes.textId} primary={chat.id}></ListItemText>
                    </Link>
                    <IconButton aria-label="delete" color="secondary" onClick={() => {
                        dispatch(deleteChat(chat.name))
                        console.log(chatList)
                    }}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>

            ))}
        </List>
    )
}