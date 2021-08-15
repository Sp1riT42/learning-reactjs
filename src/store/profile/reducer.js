import {PICKED} from "./types";

const initialCheckbox = {
    stateCheckbox: true
}

export const profileReducer = (state = initialCheckbox, action) => {
    switch (action.type) {
        case PICKED:
            return {
                ...state,
                stateCheckbox: !state.stateCheckbox
            }
        default:
            return state
    }
}