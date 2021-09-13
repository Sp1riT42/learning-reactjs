import {render} from "@testing-library/react";
import {Provider, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "../../../store";
import {orange} from "@material-ui/core/colors";
import thunk from "redux-thunk";
import {MessageField} from "./message-field";
import {messagesList} from "../../../store/messages/selectors";

let initialState = null

beforeEach(() => {
    initialState = {
        messagesReducer:{
            messages: {
                room1: [{ id: new Date(), author: "Bot", text: "Hello from store 1" }],
            },
        }

    }
})
const theme = createTheme({
    customTheme: {
        color: orange[500]
    },
    palette: {
        secondary: {
            main: orange[500],
        },
        primary: {
            main: orange[500]
        }
    },
});

describe('message-field component', () => {
    it("should render message-field ", () => {
        const store = createStore(reducer,  initialState, applyMiddleware(thunk))
        const messageList = initialState.messagesReducer.messages['room1']
        const {container}= render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>

                            <MessageField
                                messages={messageList} classes={true}
                            ></MessageField>

                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )


         // container.querySelector('.authorUser').value = 'test'
         console.log('message-field-test', container.querySelector('#id0').textContent)
         expect(container.querySelector('#id0')).toHaveTextContent('0 Hello from store 1=Bot')
    })
})