import './App.css';
import {
  useState,
} from "react";
import {Grid, Paper} from "@material-ui/core";
import { makeStyles} from '@material-ui/core/styles';
import {Chat} from "./components/chat";
import {Message} from "./components/message";
import {
  Switch,
  Route,
  BrowserRouter,
    useParams
} from "react-router-dom";

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
  const classes = useStyles()
  const [message, setMessage] = useState('');


   const { chatIdDef } = useParams();
  const selectChat = (chatId) => {
  console.log(chatId)
    if(chatId?.length > 0) {
      console.log(chatId)
      setMessage('true')

      console.log(message)
    } else setMessage('false')
  }
  const renderChat = (message) => {
    console.log(message, chatIdDef)
    if(message === 'true') {
      return (<Message></Message>)
    }

  }
  const testFoo = (chatId2) => {
    return (
        <h1>TEST {chatId2}</h1>
    )
  }

  return (
      <BrowserRouter>


    <div className="App">
      <Grid container={true}>
        <Grid item={true} xs={12}>

        </Grid>
        <Grid item={true} xs={2} className={classes.leftMenu}>
          <Paper elevation={0}>
              <Chat selectChat={selectChat}></Chat>
          </Paper>

        </Grid>
        <Grid item={true} xs={10} className={classes.rightMenu}>
         <Switch>
           <Route path="/chats/:chatId">
             {renderChat(message)}
             {testFoo()}
           </Route>
         </Switch>

        </Grid>
      </Grid>
    </div>
      </BrowserRouter>
  );
}

//export default App;
