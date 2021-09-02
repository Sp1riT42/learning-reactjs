import {GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR} from "./types";

const initialCheckbox = {
    gists: [],
    gistsPending: false,
    gistError: null,
}

export const gistsReducer = (state = initialCheckbox, action) => {
    console.log(state, action)
    switch (action.type) {
        case GET_GISTS_START:
            return {
                ...state,
                gistsPending: true
            }
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                gistsPending: false,
                gists: action.payload
            }
        case GET_GISTS_ERROR:
            return {
                ...state,
                gistsPending: false,
                gistsError: action.payload
            }
        default:
            return state
    }
}