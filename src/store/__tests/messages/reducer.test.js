import {messagesReducer, sendMessage} from "../../messages";
import {GET_MESSAGES} from "../../messages/types";

describe('message reducer', () => {
    it("send message", () => {
        const state = messagesReducer(
            {messages: {}},
            sendMessage({message: 'test', author: 'User'}, 'room1')
        )
        expect(state.messages.room1.length).toBe(2)
        //ещё ответ бота прилетает после первого сообщения от юзера итого 2
        expect(state.messages.room1[1].author).toBe("User")
        expect(state.messages.room1[1]).toHaveProperty("text", "test")
    })

    it("get messages", () => {
        const state = messagesReducer(
            { messages: {} },
            { type: GET_MESSAGES, payload:
                    { room1:
                            [
                                { id: '03.09.2021', author: "Bot", text: "Hello from store 1" },
                                { id: '03.09.2021', author: "User", text: "Hello" }
                            ]
                    } },
        )

        expect(Object.keys(state.messages)).toEqual(["room1"])
        expect(state.messages.room1).toEqual(
            [
                        { id: '03.09.2021', author: "Bot", text: "Hello from store 1" },
                        { id: '03.09.2021', author: "User", text: "Hello" }
                    ])
    })
})