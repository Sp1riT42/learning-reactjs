import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "../../store";
import {Message} from "./message";
import {orange} from "@material-ui/core/colors";
import thunk from "redux-thunk";
import userEvent from "@testing-library/user-event";

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

describe('message component', () => {
    it("should render message and set value in input", () => {
        const store = createStore(reducer,  initialState, applyMiddleware(thunk))

        const {container}= render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Message room='room1'></Message>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )


        container.querySelector('#standard-basic').value = 'test'
        console.log('www', container.querySelector('#standard-basic').value)
        expect(container.querySelector('#standard-basic').value).toBe('test')
    })

    it("should render message and click button", () => {
        const store = createStore(reducer,  initialState, applyMiddleware(thunk))

        const {container}= render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Message room='room1'></Message>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )
        const handleListItemClick = jest.fn()
        container.querySelector('.sendMessageBtn').onClick = handleListItemClick()
       userEvent.click(container.querySelector('.sendMessageBtn'))

         // console.log('click-test', container.querySelector('.sendMessageBtn').onClick)
        // expect(container.querySelector('#standard-basic').value).toBe('test')
        expect(handleListItemClick).toBeCalledTimes(1)
    })
})