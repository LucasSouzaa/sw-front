import * as types from '../types';

const INITIAL_STATE = {
    isLoading: true,
    force: null,
    theme: ''
};

export default function theForceReducer(state = INITIAL_STATE, action) {

    if (types.FEEL_THE_FORCE === action.type) {
        return {
            ...state,
            isLoading: true,
        };
    }

    if (types.GET_THE_FORCE_SUCCESS === action.type) {
        if (state.isLoading === true) {

            let theme = ''

            if (action.payload.data.name === 'Luke Skywalker') {
                theme = 'lightside'
            } else {
                theme = 'darkside'
            }

            return {
                ...state,
                isLoading: false,
                force: action.payload.data,
                theme
            };
        }

    }

    if (types.GET_THE_FORCE_FAIL === action.type) {
        if (state.force === null) {
            return {
                ...state,
                isLoading: false,
                force: null,
                theme: ''
            };
        }

    }

    return state;
}
