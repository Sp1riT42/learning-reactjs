import './App.css';
import {
  useState,
  useEffect,
    useRef
} from "react";
import {Button, TextField, ListItem, ListItemText, List, Grid, Paper} from "@material-ui/core";
import { makeStyles} from '@material-ui/core/styles';

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
export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");
  const [chatList, setChatList] = useState([
    {name: "Game", id: "1"},
    {name: "Life", id: "2"},
    {name: "CodeWars", id: "3"}
  ])
  const textInput = useRef(null);
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState('1');

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleSendMessage = () => {
    console.log(value)
    setMessageList((state) => [...state, { text: value, author: "User" }]);
    setValue("");
  };

    useEffect(() => {
      textInput.current.focus()
      if(messageList[messageList.length-1]?.author === "User") {
        setTimeout(() =>{
          setMessageList((state) => [...state, { text: "Hi, User", author: "Bot" }]);
        }, 1500)
        console.log(textInput)

      }
    },[messageList])

  return (
    <div className="App">
      <Grid container={true}>
        <Grid item={true} xs={2} className={classes.leftMenu}>
          <Paper elevation={0}>
            <List component="nav" aria-label="main mailbox folders">
              {chatList.map(chat => (
                  <ListItem button
                            key={chat.id}
                            selected={selectedIndex === chat.id}
                            onClick={(event) => handleListItemClick(event, chat.id)}>
                    <ListItemText className={classes.root} primary={chat.name}></ListItemText>
                    <ListItemText className={classes.textId} primary={chat.id}></ListItemText>
                  </ListItem>
              ))}
            </List>
          </Paper>

        </Grid>
        <Grid item={true} xs={10} className={classes.rightMenu}>
            <List>
              {messageList.map((message, id) => {
                  if(message.author === 'User') {
                  return <ListItemText primary={id + ' ' + message.text + '=' + message.author}
                                key={id}
                                className={classes.authorUser}>
                  </ListItemText>
              }else {
                    return <ListItemText primary={id + ' ' + message.text + '=' + message.author}
                                         key={id}
                                         className={classes.notAuthor}>
                    </ListItemText>
                  }})}
            </List>
            <div className={classes.chatForm}>
              <TextField id="standard-basic"
                         color="primary"

                         inputRef={textInput}
                         label="message"
                         value={value}
                         onChange={(e) => setValue(e.target.value)}/>
              <Button color="primary" variant="outlined" onClick={handleSendMessage}>send</Button>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}

//export default App;
