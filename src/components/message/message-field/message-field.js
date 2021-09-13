import { List, ListItemText} from "@material-ui/core";

export const MessageField = ({messages, classes}) => {
        console.log(messages, classes)
        return <List>
            {messages?.map((message, id) => {
                return <ListItemText primary={id + ' ' + message.text + '=' + message.author}
                                     key={id}
                                     id={`id${id}`}
                                     className={message.author === 'User' ? classes.authorUser : classes.notAuthor}>
                </ListItemText>
            })}
        </List>
};