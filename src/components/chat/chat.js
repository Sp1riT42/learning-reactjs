import {useState} from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useParams} from "react-router-dom";

export const Chat = ({selectChat}) => {
    const [chatList, setChatList] = useState([
        {name: "Game", id: "1"},
        {name: "Life", id: "2"},
        {name: "CodeWars", id: "3"}
    ])
    const [selectedIndex, setSelectedIndex] = useState('1');
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(chatId)
    };
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
    let chatId = useParams();
    return (
        <List component="nav" aria-label="main mailbox folders">
            {chatList.map(chat => (
                <ListItem button
                          key={chat.id}
                          selected={selectedIndex === chat.id}
                          onClick={(event) => handleListItemClick(event, chat.id)}>
                    <Link to={`/chats/`+chat.name} onClick={() => {selectChat(chat.name)}}>
                        <ListItemText className={classes.root} primary={chat.name}></ListItemText>
                        <ListItemText className={classes.textId} primary={chat.id}></ListItemText>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}