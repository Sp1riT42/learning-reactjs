import {PICKED} from "./types";

const initialCheckbox = {
    stateCheckbox: true
}

export const profileReducer = (state = initialCheckbox, action) => {
    console.log(state, action)
    switch (action.type) {
        case PICKED:
            console.log({
                ...state
            })
            return {
                ...state,
                stateCheckbox: !state.stateCheckbox
            }
        default:
            return state
    }
}